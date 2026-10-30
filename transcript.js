const GOOGLE_SHEET_WEBHOOK_URL = 'https://script.google.com/macros/s/AKfycbwmDpPXF42ZCP2pDGpuZbqAlLhdk0Ujk-hmEeHtzNVVXyU4QxGMCTnyLrn__rphX7BJ/exec';

async function sendResultsToGoogleSheet(candidateId, transcript, feedback) {
    if (!GOOGLE_SHEET_WEBHOOK_URL) {
        document.getElementById('status-text').innerText = "Evaluation completed (Google Sheet webhook URL not set).";
        return;
    }


    // TODO: Scraping data from UI elements is no good
    const scoreMatch = feedback.match(/Total Score:\s*(\d+(\.\d+)?\s*\/\s*20)/i);
    const ratingMatch = feedback.match(/Global Rating:\s*([^\n\r]+)/i);
    const scoreSummary = `${ratingMatch ? ratingMatch[1].trim() : ''} (${scoreMatch ? scoreMatch[1].trim() : 'N/A'})`;

    const payload = {
        timestamp: new Date().toLocaleString(),
        candidateId: candidateId,
        stationName: currentStation.title,
        scoreSummary: scoreSummary,
        feedback: feedback,
        transcript: transcript
    };

    try {
        await fetch(GOOGLE_SHEET_WEBHOOK_URL, {
            method: 'POST',
            mode: 'no-cors',
            headers: { 'Content-Type': 'text/plain' },
            body: JSON.stringify(payload)
        });
        document.getElementById('status-text').innerText = `Results successfully logged to Google Sheet for candidate: ${candidateId}`;
    } catch (e) {
        console.warn("Could not post to Google Sheet:", e);
        document.getElementById('status-text').innerText = "Station completed, but failed to sync to Google Sheet.";
    }
}
