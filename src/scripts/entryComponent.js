const makeJournalEntryComponent = (entry) => {
    // Create your own HTML structure for a journal entry
    return `
        <div class="entryCard">
            <h1>${entry.concepts}</h1>
            <p>${entry.date}</p>
            <p>${entry.mood}</p>
            <p>${entry.log}</p>
        </div>    
    `
}