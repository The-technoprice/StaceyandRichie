import { google } from 'googleapis';

// Extract spreadsheet ID from the URL
const SPREADSHEET_ID = '13T8IK1eKfP-dy7tiXVU3iY4wMn_pAASSpx-u7q5pzJg';

// Service account authentication for Google Sheets
export async function authenticateGoogleSheets() {
  // For now, we'll use API key authentication
  // Later, we can set up service account credentials
  const auth = new google.auth.GoogleAuth({
    scopes: ['https://www.googleapis.com/auth/spreadsheets'],
    credentials: {
      // We'll need to ask for Google Service Account credentials
      type: 'service_account',
      private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
      client_email: process.env.GOOGLE_CLIENT_EMAIL,
      project_id: process.env.GOOGLE_PROJECT_ID,
    },
  });

  const sheets = google.sheets({ version: 'v4', auth });
  return sheets;
}

// Function to write pledge data to Google Sheets
export async function writePledgeToSheets(pledgeData: {
  guestName: string;
  guestEmail: string;
  phone?: string;
  supportType: string;
  description: string;
  availability?: string;
  contactPreference: string;
}) {
  try {
    const sheets = await authenticateGoogleSheets();
    
    // Prepare the row data
    const rowData = [
      new Date().toISOString(), // Timestamp
      pledgeData.guestName,
      pledgeData.guestEmail,
      pledgeData.phone || '',
      pledgeData.supportType,
      pledgeData.description,
      pledgeData.availability || '',
      pledgeData.contactPreference,
    ];

    // Append the data to the spreadsheet
    await sheets.spreadsheets.values.append({
      spreadsheetId: SPREADSHEET_ID,
      range: 'Sheet1!A:H', // Adjust range as needed
      valueInputOption: 'RAW',
      requestBody: {
        values: [rowData],
      },
    });

    return { success: true };
  } catch (error) {
    console.error('Error writing to Google Sheets:', error);
    return { success: false, error: error.message };
  }
}

// Function to write donation data to Google Sheets  
export async function writeDonationToSheets(donationData: {
  donorName: string;
  donorEmail: string;
  amount: number;
  currency: string;
  category: string;
  message?: string;
  paystackReference?: string;
}) {
  try {
    const sheets = await authenticateGoogleSheets();
    
    // Prepare the row data
    const rowData = [
      new Date().toISOString(), // Timestamp
      donationData.donorName,
      donationData.donorEmail,
      donationData.amount,
      donationData.currency,
      donationData.category,
      donationData.message || '',
      donationData.paystackReference || '',
    ];

    // Append the data to the spreadsheet (different sheet or range)
    await sheets.spreadsheets.values.append({
      spreadsheetId: SPREADSHEET_ID,
      range: 'Donations!A:H', // Separate sheet for donations
      valueInputOption: 'RAW',
      requestBody: {
        values: [rowData],
      },
    });

    return { success: true };
  } catch (error) {
    console.error('Error writing donation to Google Sheets:', error);
    return { success: false, error: error.message };
  }
}