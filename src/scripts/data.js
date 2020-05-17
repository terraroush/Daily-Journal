// fetch("http://localhost:3000/entries") // Fetch from the API
//     .then(response => response.json())  // Parse as JSON
//     .then(entries => {
//         entries.forEach(entry => {
//             console.log(entry);
//             const entryAsHTML = makeJournalEntryComponent(entry)
//             renderJournalEntries(entryAsHTML)
                        
//         } )
//     })
    const API = {
        getJournalEntries () {
            return fetch("http://localhost:3000/entries")
                .then(response => response.json())
        }
    }