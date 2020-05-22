import makeJournalEntryComponent from "./entryComponent.js"

const journalEntryContainer = document.querySelector(".entryLog");

function renderJournalEntries(entries) {
    entries.forEach( (entry) => {
        let entryHTML = makeJournalEntryComponent(entry)
        journalEntryContainer.innerHTML += entryHTML;
    })
}


export default renderJournalEntries

