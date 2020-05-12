// const journalCollection = []
// journalCollection.push(journalEntry1);
// journalCollection.push(journalEntry2);
// journalCollection.push(journalEntry3);
// journalCollection.push(journalEntry4);
// journalCollection.push(journalEntry5);
// journalCollection.push(journalEntry6);

fetch("http://localhost:3000/entries") // Fetch from the API
    .then(response => response.json())  // Parse as JSON
    .then(entries => {
        entries.forEach(entry => {
            console.log(entry);
            const entryAsHTML = makeJournalEntryComponent(entry)
            addEntryToDom(entryAsHTML)
                        
        } )
        // What should happen when we finally have the array?
    })
const journalEntryContainer = document.querySelector(".entryLog");
    
function addEntryToDom(journalEntry) {
    journalEntryContainer.innerHTML += journalEntry;
};
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

// const renderJournalEntries = (entries) => {

//     for (let i = 0; i < entries.length; i++) {
//         const entry = entries[i]
//         journalEntryContainer.innerHTML += makeJournalEntryComponent(entry)
            
//         }
//     }
//     renderJournalEntries(journalEntries)