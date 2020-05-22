import renderJournalEntries from "./entriesDOM.js"
import API from "./data.js"


API.getJournalEntries().then(renderJournalEntries)