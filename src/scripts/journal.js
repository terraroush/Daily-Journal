const journalEntries = [
    
      {
            date: "4/17/2020",
            concepts: "manipulating the DOM, javascript objects",
            log: "This was a tough day for me. I was just getting the hang of CSS and HTML and this is making my head spin. I can't lay claim to understanding these concepts yet.",
            mood: "confused"
        },
        
        {
            date: "4/20/2020",
            concepts: "manipulating the DOM, javascript objects",
            log: "This was a tough day for me. I was just getting the hang of CSS and HTML and this is making my head spin. I can't lay claim to understanding these concepts yet.",
            mood: "confused"
        },
        {
            date: "4/21/2020",
            concepts: "functions and logic js, objects representing things, debugging",
            log: "I spent several hours of the weekend fretting over what we covered on Friday. I didn't understand those concepts and now we're piling on even more. I can follow along for the examples in class. UPDATE I've been able to get some of these practices, but not all. It's a vast improvement.",
            mood: "hopeless"
        },
        {
            date: "4/22/2020",
            concepts: "building DOM components, building and using API, fetching data",
            log: "I spent all of yesterday on the computer. I would spend maybe 10 minutes reading the same instructions over and over, then spend 30 minutes on amazon, or otherwise somewhere else on the computer. Then I'd go back to the problem and read the same instructions over again and continue the cycle over for hours and hours. I was soooo worked up. So today, I didn't really have any room in my head for debugging or anything else. I watched along, and tried to follow, but it wasn't my whole brain watching. I watched a ton of youtube videos, which everyone said was a little excessive, but I think it was good for me. To an extent. I was exhausted. Too exhausted.Today ended with chatting with Sage. She convinced me that I needed to walk away formmy computer, so that's what I'll do.",
            mood: "panicked"
        },
        {
            date: "4/23/2020",
            concepts: "building DOM components, handling browser events",
            log: "I spent the day again just trying to catch up. I listened and followed along during lecture and examples, but it was hard to absorb. I did have some successs moving forward though, so I'm happy.",
            mood: "humbled"
        },
        {
            date: "4/24/2020",
            concepts: "collecting user input",
            log: "Another day, another huge pile of new information. I am really getting the hang of gih and gihub, so that is huge to me. I've finally begun this daily-journal exercise from chapter 2...so yeah. That's good too. I really am starting to think I'll be okay.",
            mood: "decent"
        }
        {
            date: "5/5/2020",
            concepts: "Factory Functions",
            log: "The lecture made a good amount of sense. Ispent the lab time getting caught up. I worked on this, daily journal3. I'm feeling much more confident to have my fingers on the keys.",
            mood: "decent"
        }
        {
            date: "5/6/2020",
            concepts: "Array Methods",
            log: "Mainly these array methods make sense. The one that had me stumped a bit was .map. I'll have to get my hands on that to understand further. I did a one-on-one with Sage today and was able to talk through a lot of my current issues. One topic of conversation was discussing whether or not to inquire about taking a step back and restart the class. I really don't think that I need to go that route. I definitely think I can catch up. I walked away thinking that everything is going to be okay.",
            mood: "hopeful"
        }
    
]


// const journalCollection = []
// journalCollection.push(journalEntry1);
// journalCollection.push(journalEntry2);
// journalCollection.push(journalEntry3);
// journalCollection.push(journalEntry4);
// journalCollection.push(journalEntry5);
// journalCollection.push(journalEntry6);



/*
    Purpose: To create, and return, a string template that
    represents a single journal entry object as HTML

    Arguments: journalEntry (object)
*/
const makeJournalEntryComponent = (journalEntry) => {
    // Create your own HTML structure for a journal entry
    return `
        <div class="entry">
            <h1>${journalEntry.concepts}</h1>
            <p>${journalEntry.date}</p>
            <p>${journalEntry.mood}</p>
            <p>${journalEntry.log}</p>
        </div>    
    `
}
const journalEntryContainer = document.querySelector(".entryLog")

const renderJournalEntries = (entries) => {

    for (let i = 0; i < entries.length; i++) {
        const entry = entries[i]
        journalEntryContainer.innerHTML += makeJournalEntryComponent(entry)
            
        }
    }
    renderJournalEntries(journalEntries)