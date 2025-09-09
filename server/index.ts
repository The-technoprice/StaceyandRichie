import express from 'express';
import cors from 'cors';
import { db } from './db';
import { donations, supportOffers, guestInformation } from '../shared/schema';
import { eq, and } from 'drizzle-orm';

const app = express();
const PORT = process.env.PORT || 3001;

// Enable CORS for all origins in development
const corsOptions = {
  origin: true,
  credentials: true,
};

app.use(cors(corsOptions));
app.use(express.json());

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', message: 'Server is running' });
});

// Get donation amounts by category
app.get('/api/donations/amounts', async (req, res) => {
  try {
    const donationData = await db
      .select({
        category: donations.category,
        amount: donations.amount,
      })
      .from(donations)
      .where(eq(donations.status, 'completed'));

    const amounts = {
      pastry: 0,
      photo_video: 0,
      entertainment: 0,
      styling: 0
    };

    donationData.forEach((donation) => {
      amounts[donation.category as keyof typeof amounts] += donation.amount;
    });

    res.json(amounts);
  } catch (error) {
    console.error('Error fetching donation amounts:', error);
    res.status(500).json({ error: 'Failed to fetch donation amounts' });
  }
});

// Create a new donation
app.post('/api/donations', async (req, res) => {
  try {
    const donationData = req.body;
    
    const newDonation = await db
      .insert(donations)
      .values({
        donorName: donationData.donor_name,
        donorEmail: donationData.donor_email,
        amount: donationData.amount,
        currency: donationData.currency || 'KES',
        category: donationData.category,
        message: donationData.message,
        paystackReference: donationData.paystack_reference,
        status: donationData.status || 'pending',
      })
      .returning();

    res.json(newDonation[0]);
  } catch (error) {
    console.error('Error creating donation:', error);
    res.status(500).json({ error: 'Failed to create donation' });
  }
});

// Create a new support offer
app.post('/api/support-offers', async (req, res) => {
  try {
    const offerData = req.body;
    
    const newOffer = await db
      .insert(supportOffers)
      .values({
        guestName: offerData.guest_name,
        guestEmail: offerData.guest_email,
        supportType: offerData.support_type,
        description: offerData.description,
        availability: offerData.availability,
        contactPreference: offerData.contact_preference || 'email',
        phone: offerData.phone,
      })
      .returning();

    res.json(newOffer[0]);
  } catch (error) {
    console.error('Error creating support offer:', error);
    res.status(500).json({ error: 'Failed to create support offer' });
  }
});

// Create guest information
app.post('/api/guest-information', async (req, res) => {
  try {
    const guestData = req.body;
    
    const newGuest = await db
      .insert(guestInformation)
      .values({
        fullName: guestData.full_name,
        email: guestData.email,
        phone: guestData.phone,
        dietaryRestrictions: guestData.dietary_restrictions,
        accessibilityNeeds: guestData.accessibility_needs,
        plusOneName: guestData.plus_one_name,
        plusOneDietary: guestData.plus_one_dietary,
        specialRequests: guestData.special_requests,
        accommodationNeeded: guestData.accommodation_needed || false,
        transportNeeded: guestData.transport_needed || false,
      })
      .returning();

    res.json(newGuest[0]);
  } catch (error) {
    console.error('Error creating guest information:', error);
    res.status(500).json({ error: 'Failed to create guest information' });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

export default app;