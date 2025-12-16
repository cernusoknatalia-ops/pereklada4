import React, { useState, useEffect } from "react";
import "../App.css";

const testsData = [
  {
    id: "level-test",
    type: "multiple-choice",
    title: "Мій рівень",
    icon: "🧠",
    questions: [
      { q: "I ___ a student.", options: ["am", "is", "are"], answer: "am" },
      {
        q: "She ___ to the store.",
        options: ["go", "goes", "going"],
        answer: "goes",
      },
      {
        q: "They ___ playing football.",
        options: ["is", "are", "am"],
        answer: "are",
      },
      { q: "He ___ a teacher.", options: ["is", "am", "are"], answer: "is" },
      { q: "We ___ friends.", options: ["is", "am", "are"], answer: "are" },
      { q: "I ___ from Ukraine.", options: ["is", "am", "are"], answer: "am" },
      {
        q: "She ___ a book.",
        options: ["read", "reads", "reading"],
        answer: "reads",
      },
      {
        q: "They ___ at the park.",
        options: ["is", "are", "am"],
        answer: "are",
      },
      { q: "He ___ a car.", options: ["have", "has", "having"], answer: "has" },
      {
        q: "We ___ to school.",
        options: ["go", "goes", "going"],
        answer: "go",
      },
      {
        q: "I ___ like coffee.",
        options: ["do", "does", "doing"],
        answer: "do",
      },
      {
        q: "She ___ a dog.",
        options: ["have", "has", "having"],
        answer: "has",
      },
      { q: "They ___ happy.", options: ["is", "are", "am"], answer: "are" },
      { q: "He ___ a pen.", options: ["have", "has", "having"], answer: "has" },
      {
        q: "We ___ in the city.",
        options: ["live", "lives", "living"],
        answer: "live",
      },
      { q: "I ___ a teacher.", options: ["am", "is", "are"], answer: "am" },
      {
        q: "She ___ to work by car.",
        options: ["go", "goes", "going"],
        answer: "goes",
      },
      { q: "They ___ at home.", options: ["is", "are", "am"], answer: "are" },
      {
        q: "He ___ a book.",
        options: ["read", "reads", "reading"],
        answer: "reads",
      },
      {
        q: "We ___ to the movies.",
        options: ["go", "goes", "going"],
        answer: "go",
      },
      { q: "I ___ a student.", options: ["am", "is", "are"], answer: "am" },
      { q: "She ___ a teacher.", options: ["is", "am", "are"], answer: "is" },
      {
        q: "They ___ playing football.",
        options: ["is", "are", "am"],
        answer: "are",
      },
      { q: "He ___ a student.", options: ["is", "am", "are"], answer: "is" },
    ],
  },
  {
    id: "a1-flashcards",
    type: "multiple-choice",
    title: "A1 Grammar",
    icon: "📘",
    questions: [
      { q: "I ___ a student.", options: ["am", "is", "are"], answer: "am" },
      {
        q: "She ___ a book.",
        options: ["read", "reads", "reading"],
        answer: "reads",
      },
      {
        q: "They ___ at the park.",
        options: ["is", "are", "am"],
        answer: "are",
      },
      { q: "He ___ a car.", options: ["have", "has", "having"], answer: "has" },
      {
        q: "We ___ to school.",
        options: ["go", "goes", "going"],
        answer: "go",
      },
      {
        q: "I ___ like coffee.",
        options: ["do", "does", "doing"],
        answer: "do",
      },
      {
        q: "She ___ a dog.",
        options: ["have", "has", "having"],
        answer: "has",
      },
      { q: "They ___ happy.", options: ["is", "are", "am"], answer: "are" },
      { q: "He ___ a pen.", options: ["have", "has", "having"], answer: "has" },
      { q: "We ___ friends.", options: ["is", "am", "are"], answer: "are" },
      { q: "I ___ from Ukraine.", options: ["is", "am", "are"], answer: "am" },
      {
        q: "She ___ to the store every day.",
        options: ["go", "goes", "going"],
        answer: "goes",
      },
    ],
  },
  {
    id: "b1-grammar",
    type: "multiple-choice",
    title: "B1 Grammar",
    icon: "✍️",
    questions: [
      {
        q: "I ___ finished my homework.",
        options: ["have", "has", "had"],
        answer: "have",
      },
      {
        q: "She ___ never been to France.",
        options: ["have", "has", "had"],
        answer: "has",
      },
      {
        q: "We ___ going to the cinema.",
        options: ["is", "are", "am"],
        answer: "are",
      },
      {
        q: "He said he ___ seen it.",
        options: ["have", "has", "had"],
        answer: "had",
      },
      {
        q: "If I ___ more time, I would travel.",
        options: ["have", "has", "had"],
        answer: "had",
      },
      {
        q: "They ___ playing football now.",
        options: ["is", "are", "am"],
        answer: "are",
      },
      {
        q: "She ___ working here since 2015.",
        options: ["is", "has been", "have been"],
        answer: "has been",
      },
      {
        q: "I ___ my keys yesterday.",
        options: ["lost", "lose", "losing"],
        answer: "lost",
      },
      {
        q: "We ___ to London last summer.",
        options: ["went", "go", "gone"],
        answer: "went",
      },
      {
        q: "He ___ already eaten.",
        options: ["have", "has", "had"],
        answer: "has",
      },
      {
        q: "If it rains, we ___ stay home.",
        options: ["will", "would", "should"],
        answer: "will",
      },
      {
        q: "She ___ reading when I called.",
        options: ["was", "were", "is"],
        answer: "was",
      },
    ],
  },
  {
    id: "c1-grammar",
    type: "multiple-choice",
    title: "C1 Grammar",
    icon: "📗",
    questions: [
      {
        q: "Had I known, I ___ helped you.",
        options: ["would have", "will", "would"],
        answer: "would have",
      },
      {
        q: "She insists that he ___ on time.",
        options: ["be", "is", "was"],
        answer: "be",
      },
      {
        q: "If he ___ harder, he could succeed.",
        options: ["works", "worked", "had worked"],
        answer: "worked",
      },
      {
        q: "He acts as if he ___ the boss.",
        options: ["is", "were", "was"],
        answer: "were",
      },
      {
        q: "By next year, I ___ completed my degree.",
        options: ["will have", "would have", "have"],
        answer: "will have",
      },
      {
        q: "I suggest that she ___ careful.",
        options: ["be", "is", "was"],
        answer: "be",
      },
      {
        q: "Had they left earlier, they ___ caught the train.",
        options: ["would have", "will", "would"],
        answer: "would have",
      },
      {
        q: "If I ___ you, I would apologize.",
        options: ["am", "were", "was"],
        answer: "were",
      },
      {
        q: "It is time that he ___ to bed.",
        options: ["go", "goes", "went"],
        answer: "went",
      },
      {
        q: "I wish I ___ more patience.",
        options: ["have", "had", "has"],
        answer: "had",
      },
      {
        q: "She would rather that he ___ here.",
        options: ["be", "is", "was"],
        answer: "be",
      },
      {
        q: "If only I ___ listened.",
        options: ["have", "had", "has"],
        answer: "had",
      },
    ],
  },
  {
    id: "grammar-present-simple",
    type: "multiple-choice",
    title: "Present Simple",
    icon: "✍️",
    questions: [
      {
        q: "I ___ to school every day.",
        options: ["go", "goes", "going", "gone"],
        answer: "go",
      },
      {
        q: "She ___ breakfast at 7am.",
        options: ["eat", "eats", "eating", "ate"],
        answer: "eats",
      },
      {
        q: "We ___ happy yesterday.",
        options: ["is", "are", "was", "were"],
        answer: "were",
      },
      {
        q: "He ___ football on Sundays.",
        options: ["play", "plays", "playing", "played"],
        answer: "plays",
      },
      {
        q: "They ___ TV every night.",
        options: ["watch", "watches", "watching", "watched"],
        answer: "watch",
      },
      {
        q: "I ___ English.",
        options: ["study", "studies", "studying", "studied"],
        answer: "study",
      },
      {
        q: "She ___ to work by car.",
        options: ["go", "goes", "going", "went"],
        answer: "goes",
      },
      {
        q: "We ___ coffee in the morning.",
        options: ["drink", "drinks", "drinking", "drank"],
        answer: "drink",
      },
      {
        q: "He ___ very fast.",
        options: ["runs", "run", "running", "ran"],
        answer: "runs",
      },
      {
        q: "They ___ in a big house.",
        options: ["live", "lives", "living", "lived"],
        answer: "live",
      },
      {
        q: "I ___ often read books.",
        options: ["do", "does", "doing", "did"],
        answer: "do",
      },
      {
        q: "She ___ go to gym on weekends.",
        options: ["does", "do", "did", "doing"],
        answer: "does",
      },
    ],
  },
  {
    id: "present-continuous",
    type: "multiple-choice",
    title: "Present Continuous",
    icon: "⏳",
    questions: [
      {
        q: "I ___ reading a book now.",
        options: ["am", "is", "are"],
        answer: "am",
      },
      {
        q: "She ___ watching TV at the moment.",
        options: ["is", "are", "am"],
        answer: "is",
      },
      {
        q: "They ___ playing football now.",
        options: ["is", "are", "am"],
        answer: "are",
      },
      {
        q: "He ___ not listening to music.",
        options: ["is", "are", "am"],
        answer: "is",
      },
      {
        q: "We ___ studying English now.",
        options: ["am", "is", "are"],
        answer: "are",
      },
      { q: "I ___ not sleeping.", options: ["am", "is", "are"], answer: "am" },
      {
        q: "She ___ cooking dinner at the moment.",
        options: ["is", "are", "am"],
        answer: "is",
      },
      {
        q: "They ___ not working today.",
        options: ["is", "are", "am"],
        answer: "are",
      },
      {
        q: "He ___ running in the park now.",
        options: ["is", "are", "am"],
        answer: "is",
      },
      {
        q: "We ___ not watching a movie.",
        options: ["am", "is", "are"],
        answer: "are",
      },
      {
        q: "I ___ writing an email.",
        options: ["am", "is", "are"],
        answer: "am",
      },
      {
        q: "She ___ drinking tea at the moment.",
        options: ["is", "are", "am"],
        answer: "is",
      },
    ],
  },
  {
    id: "past-simple",
    type: "multiple-choice",
    title: "Past Simple",
    icon: "⏳",
    questions: [
      {
        q: "I ___ to the store yesterday.",
        options: ["go", "went", "gone"],
        answer: "went",
      },
      {
        q: "She ___ a book last week.",
        options: ["read", "reads", "reading"],
        answer: "read",
      },
      {
        q: "They ___ at home yesterday.",
        options: ["is", "are", "were"],
        answer: "were",
      },
      {
        q: "He ___ a car two days ago.",
        options: ["buy", "buys", "bought"],
        answer: "bought",
      },
      {
        q: "We ___ dinner at 7pm.",
        options: ["eat", "ate", "eating"],
        answer: "ate",
      },
      {
        q: "I ___ my homework yesterday.",
        options: ["do", "did", "done"],
        answer: "did",
      },
      {
        q: "She ___ to the cinema last night.",
        options: ["go", "went", "gone"],
        answer: "went",
      },
      {
        q: "They ___ happy yesterday.",
        options: ["is", "are", "were"],
        answer: "were",
      },
      {
        q: "He ___ TV last evening.",
        options: ["watch", "watched", "watching"],
        answer: "watched",
      },
      {
        q: "We ___ a party on Saturday.",
        options: ["have", "had", "having"],
        answer: "had",
      },
      {
        q: "I ___ a letter to my friend.",
        options: ["write", "wrote", "writing"],
        answer: "wrote",
      },
      {
        q: "She ___ not like the movie.",
        options: ["did", "does", "do"],
        answer: "did",
      },
    ],
  },
  {
    id: "past-continuous",
    type: "multiple-choice",
    title: "Past Continuous",
    icon: "🕰️",
    questions: [
      {
        q: "I ___ reading when he called.",
        options: ["was", "were", "am"],
        answer: "was",
      },
      {
        q: "She ___ cooking dinner at 7pm yesterday.",
        options: ["was", "were", "is"],
        answer: "was",
      },
      {
        q: "They ___ playing football when it started to rain.",
        options: ["was", "were", "are"],
        answer: "were",
      },
      {
        q: "He ___ not listening to music at that time.",
        options: ["was", "were", "am"],
        answer: "was",
      },
      {
        q: "We ___ studying when the teacher came.",
        options: ["was", "were", "am"],
        answer: "were",
      },
      {
        q: "I ___ sleeping at midnight.",
        options: ["was", "were", "am"],
        answer: "was",
      },
      {
        q: "She ___ not watching TV yesterday.",
        options: ["was", "were", "am"],
        answer: "was",
      },
      {
        q: "They ___ going to the park at 6pm.",
        options: ["was", "were", "am"],
        answer: "were",
      },
      {
        q: "He ___ running when he fell.",
        options: ["was", "were", "am"],
        answer: "was",
      },
      {
        q: "We ___ not drinking coffee in the morning.",
        options: ["was", "were", "am"],
        answer: "were",
      },
      {
        q: "I ___ writing an email yesterday.",
        options: ["was", "were", "am"],
        answer: "was",
      },
      {
        q: "She ___ drinking tea when I arrived.",
        options: ["was", "were", "am"],
        answer: "was",
      },
    ],
  },
  {
    id: "future-simple",
    type: "multiple-choice",
    title: "Future Simple",
    icon: "🚀",
    questions: [
      {
        q: "I ___ go to the party tomorrow.",
        options: ["will", "am", "going"],
        answer: "will",
      },
      {
        q: "She ___ finish her homework later.",
        options: ["will", "is", "has"],
        answer: "will",
      },
      {
        q: "They ___ travel to London next year.",
        options: ["will", "went", "goes"],
        answer: "will",
      },
      {
        q: "He ___ help you with the project.",
        options: ["will", "does", "did"],
        answer: "will",
      },
      {
        q: "We ___ meet them at the airport.",
        options: ["will", "are", "is"],
        answer: "will",
      },
      {
        q: "I ___ call you tonight.",
        options: ["will", "am", "did"],
        answer: "will",
      },
      {
        q: "She ___ buy a new car.",
        options: ["will", "buys", "bought"],
        answer: "will",
      },
      {
        q: "They ___ come to the party.",
        options: ["will", "came", "coming"],
        answer: "will",
      },
      {
        q: "He ___ finish the report by Monday.",
        options: ["will", "is", "was"],
        answer: "will",
      },
      {
        q: "We ___ start the lesson at 10am.",
        options: ["will", "are", "did"],
        answer: "will",
      },
      {
        q: "I ___ visit my grandparents this weekend.",
        options: ["will", "am", "visit"],
        answer: "will",
      },
      {
        q: "She ___ probably join us later.",
        options: ["will", "does", "did"],
        answer: "will",
      },
    ],
  },
  {
    id: "future-continuous",
    type: "multiple-choice",
    title: "Future Continuous",
    icon: "⏳",
    questions: [
      {
        q: "I ___ working at 10am tomorrow.",
        options: ["will be", "am", "is"],
        answer: "will be",
      },
      {
        q: "She ___ reading a book at this time.",
        options: ["will be", "is", "was"],
        answer: "will be",
      },
      {
        q: "They ___ playing football at 3pm.",
        options: ["will be", "are", "were"],
        answer: "will be",
      },
      {
        q: "He ___ traveling next week.",
        options: ["will be", "is", "did"],
        answer: "will be",
      },
      {
        q: "We ___ having dinner at 8pm.",
        options: ["will be", "are", "was"],
        answer: "will be",
      },
      {
        q: "I ___ studying English tomorrow evening.",
        options: ["will be", "am", "did"],
        answer: "will be",
      },
      {
        q: "She ___ waiting for you at the station.",
        options: ["will be", "is", "was"],
        answer: "will be",
      },
      {
        q: "They ___ working on the project at 2pm.",
        options: ["will be", "are", "did"],
        answer: "will be",
      },
      {
        q: "He ___ cooking dinner at 7pm.",
        options: ["will be", "is", "was"],
        answer: "will be",
      },
      {
        q: "We ___ traveling by plane next Monday.",
        options: ["will be", "are", "did"],
        answer: "will be",
      },
      {
        q: "I ___ taking a shower at this time.",
        options: ["will be", "am", "was"],
        answer: "will be",
      },
      {
        q: "She ___ listening to music in the evening.",
        options: ["will be", "is", "was"],
        answer: "will be",
      },
    ],
  },
  {
    id: "present-perfect",
    type: "multiple-choice",
    title: "Present Perfect",
    icon: "✅",
    questions: [
      {
        q: "I ___ finished my homework.",
        options: ["have", "has", "had"],
        answer: "have",
      },
      {
        q: "She ___ never been to France.",
        options: ["has", "have", "had"],
        answer: "has",
      },
      {
        q: "They ___ gone to the cinema.",
        options: ["have", "has", "had"],
        answer: "have",
      },
      {
        q: "He ___ already eaten.",
        options: ["has", "have", "had"],
        answer: "has",
      },
      {
        q: "We ___ lived here for 5 years.",
        options: ["have", "has", "had"],
        answer: "have",
      },
      {
        q: "I ___ seen that movie.",
        options: ["have", "has", "had"],
        answer: "have",
      },
      {
        q: "She ___ just finished her work.",
        options: ["has", "have", "had"],
        answer: "has",
      },
      {
        q: "They ___ read this book.",
        options: ["have", "has", "had"],
        answer: "have",
      },
      {
        q: "He ___ visited London many times.",
        options: ["has", "have", "had"],
        answer: "has",
      },
      {
        q: "We ___ completed the project.",
        options: ["have", "has", "had"],
        answer: "have",
      },
      {
        q: "I ___ met him before.",
        options: ["have", "has", "had"],
        answer: "have",
      },
      {
        q: "She ___ already left.",
        options: ["has", "have", "had"],
        answer: "has",
      },
    ],
  },
  {
    id: "present-perfect-continuous",
    type: "multiple-choice",
    title: "Present Perfect Continuous",
    icon: "⏱️",
    questions: [
      {
        q: "I ___ studying English for 2 hours.",
        options: ["have been", "has been", "had been"],
        answer: "have been",
      },
      {
        q: "She ___ working here since 2015.",
        options: ["has been", "have been", "had been"],
        answer: "has been",
      },
      {
        q: "They ___ playing football all afternoon.",
        options: ["have been", "has been", "had been"],
        answer: "have been",
      },
      {
        q: "He ___ waiting for you for 30 minutes.",
        options: ["has been", "have been", "had been"],
        answer: "has been",
      },
      {
        q: "We ___ living in this city since 2010.",
        options: ["have been", "has been", "had been"],
        answer: "have been",
      },
      {
        q: "I ___ reading this book since morning.",
        options: ["have been", "has been", "had been"],
        answer: "have been",
      },
      {
        q: "She ___ cooking since 5pm.",
        options: ["has been", "have been", "had been"],
        answer: "has been",
      },
      {
        q: "They ___ studying English for months.",
        options: ["have been", "has been", "had been"],
        answer: "have been",
      },
      {
        q: "He ___ working on this project since last week.",
        options: ["has been", "have been", "had been"],
        answer: "has been",
      },
      {
        q: "We ___ waiting for the bus for 10 minutes.",
        options: ["have been", "has been", "had been"],
        answer: "have been",
      },
      {
        q: "I ___ exercising all morning.",
        options: ["have been", "has been", "had been"],
        answer: "have been",
      },
      {
        q: "She ___ practicing piano for hours.",
        options: ["has been", "have been", "had been"],
        answer: "has been",
      },
    ],
  },
  {
    id: "past-perfect",
    type: "multiple-choice",
    title: "Past Perfect",
    icon: "⏳",
    questions: [
      {
        q: "I ___ finished my homework before he came.",
        options: ["had", "have", "has"],
        answer: "had",
      },
      {
        q: "She ___ already left when I arrived.",
        options: ["had", "have", "has"],
        answer: "had",
      },
      {
        q: "They ___ eaten before we arrived.",
        options: ["had", "have", "has"],
        answer: "had",
      },
      {
        q: "He ___ written the report by yesterday.",
        options: ["had", "have", "has"],
        answer: "had",
      },
      {
        q: "We ___ lived there before moving.",
        options: ["had", "have", "has"],
        answer: "had",
      },
      {
        q: "I ___ met her before the party.",
        options: ["had", "have", "has"],
        answer: "had",
      },
      {
        q: "She ___ finished her work before 6pm.",
        options: ["had", "have", "has"],
        answer: "had",
      },
      {
        q: "They ___ gone to London before the summer.",
        options: ["had", "have", "has"],
        answer: "had",
      },
      {
        q: "He ___ completed the task before the meeting.",
        options: ["had", "have", "has"],
        answer: "had",
      },
      {
        q: "We ___ eaten dinner when you called.",
        options: ["had", "have", "has"],
        answer: "had",
      },
      {
        q: "I ___ seen the movie before yesterday.",
        options: ["had", "have", "has"],
        answer: "had",
      },
      {
        q: "She ___ left the house before the rain started.",
        options: ["had", "have", "has"],
        answer: "had",
      },
    ],
  },
  {
    id: "past-perfect-continuous",
    type: "multiple-choice",
    title: "Past Perfect Continuous",
    icon: "⏱️",
    questions: [
      {
        q: "I ___ studying for 2 hours before he arrived.",
        options: ["had been", "has been", "have been"],
        answer: "had been",
      },
      {
        q: "She ___ working there for 5 years before moving.",
        options: ["had been", "has been", "have been"],
        answer: "had been",
      },
      {
        q: "They ___ playing football for an hour before it rained.",
        options: ["had been", "has been", "have been"],
        answer: "had been",
      },
      {
        q: "He ___ waiting for 30 minutes when the bus came.",
        options: ["had been", "has been", "have been"],
        answer: "had been",
      },
      {
        q: "We ___ living there for years before selling the house.",
        options: ["had been", "has been", "have been"],
        answer: "had been",
      },
      {
        q: "I ___ reading the book for 3 hours before bedtime.",
        options: ["had been", "has been", "have been"],
        answer: "had been",
      },
      {
        q: "She ___ cooking for 2 hours before the guests arrived.",
        options: ["had been", "has been", "have been"],
        answer: "had been",
      },
      {
        q: "They ___ studying for the test before the teacher came.",
        options: ["had been", "has been", "have been"],
        answer: "had been",
      },
      {
        q: "He ___ working on the project for days before finishing it.",
        options: ["had been", "has been", "have been"],
        answer: "had been",
      },
      {
        q: "We ___ waiting for the bus for 20 minutes when it arrived.",
        options: ["had been", "has been", "have been"],
        answer: "had been",
      },
      {
        q: "I ___ exercising before the gym closed.",
        options: ["had been", "has been", "have been"],
        answer: "had been",
      },
      {
        q: "She ___ practicing piano for hours before the recital.",
        options: ["had been", "has been", "have been"],
        answer: "had been",
      },
    ],
  },
  {
    id: "future-perfect",
    type: "multiple-choice",
    title: "Future Perfect",
    icon: "🎯",
    questions: [
      {
        q: "By next week, I ___ finished my project.",
        options: ["will have", "will", "am"],
        answer: "will have",
      },
      {
        q: "She ___ completed her work by 5pm.",
        options: ["will have", "will", "did"],
        answer: "will have",
      },
      {
        q: "They ___ left the city by tomorrow.",
        options: ["will have", "will", "are"],
        answer: "will have",
      },
      {
        q: "He ___ written the report by Friday.",
        options: ["will have", "will", "did"],
        answer: "will have",
      },
      {
        q: "We ___ cleaned the house by evening.",
        options: ["will have", "will", "are"],
        answer: "will have",
      },
      {
        q: "I ___ read this book by next month.",
        options: ["will have", "will", "am"],
        answer: "will have",
      },
      {
        q: "She ___ finished cooking by 8pm.",
        options: ["will have", "will", "is"],
        answer: "will have",
      },
      {
        q: "They ___ built the new bridge by 2026.",
        options: ["will have", "will", "are"],
        answer: "will have",
      },
      {
        q: "He ___ cleaned his room by tomorrow.",
        options: ["will have", "will", "did"],
        answer: "will have",
      },
      {
        q: "We ___ completed all exercises by next class.",
        options: ["will have", "will", "did"],
        answer: "will have",
      },
      {
        q: "I ___ sent the emails by 6pm.",
        options: ["will have", "will", "am"],
        answer: "will have",
      },
      {
        q: "She ___ finished her homework by tomorrow morning.",
        options: ["will have", "will", "is"],
        answer: "will have",
      },
    ],
  },
  {
    id: "future-perfect-continuous",
    type: "multiple-choice",
    title: "Future Perfect Continuous",
    icon: "⏱️",
    questions: [
      {
        q: "By next week, I ___ working here for 2 years.",
        options: ["will have been", "will be", "am"],
        answer: "will have been",
      },
      {
        q: "She ___ studying for 3 hours by 6pm.",
        options: ["will have been", "will be", "has been"],
        answer: "will have been",
      },
      {
        q: "They ___ playing football for 2 hours by the time we arrive.",
        options: ["will have been", "will be", "have been"],
        answer: "will have been",
      },
      {
        q: "He ___ waiting for you for 30 minutes by 9am.",
        options: ["will have been", "will be", "has been"],
        answer: "will_have_been",
      },
      {
        q: "We ___ living in this city for 5 years by next month.",
        options: ["will have been", "will be", "have been"],
        answer: "will have been",
      },
      {
        q: "I ___ reading this book for 2 hours by lunchtime.",
        options: ["will have been", "will be", "am"],
        answer: "will have been",
      },
      {
        q: "She ___ cooking for 3 hours by the time we arrive.",
        options: ["will have been", "will be", "has been"],
        answer: "will have been",
      },
      {
        q: "They ___ working on the project for a week by Friday.",
        options: ["will have been", "will be", "have been"],
        answer: "will have been",
      },
      {
        q: "He ___ practicing piano for 2 hours by the recital.",
        options: ["will have been", "will be", "has been"],
        answer: "will have been",
      },
      {
        q: "We ___ waiting for the bus for 20 minutes by 8am.",
        options: ["will have been", "will be", "have been"],
        answer: "will have been",
      },
      {
        q: "I ___ exercising for 1 hour by the time you come.",
        options: ["will have been", "will be", "am"],
        answer: "will have been",
      },
      {
        q: "She ___ studying for 4 hours by the evening.",
        options: ["will have been", "will be", "has been"],
        answer: "will have been",
      },
    ],
  },
  {
    id: "vocabulary-food",
    type: "flashcards",
    title: "Слова: Їжа",
    icon: "🥪",
    questions: [
      { word: "Bread", translation: "Хліб" },
      { word: "Milk", translation: "Молоко" },
      { word: "Cheese", translation: "Сир" },
      { word: "Egg", translation: "Яйце" },
      { word: "Butter", translation: "Масло" },
      { word: "Tomato", translation: "Помідор" },
      { word: "Onion", translation: "Цибуля" },
      { word: "Apple", translation: "Яблуко" },
      { word: "Banana", translation: "Банан" },
      { word: "Carrot", translation: "Морква" },
    ],
  },
];

function Test({ darkMode }) {
  const [currentTest, setCurrentTest] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showTranslation, setShowTranslation] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const [score, setScore] = useState(0);
  const [completed, setCompleted] = useState(false);

  const [questionOrder, setQuestionOrder] = useState([]);

  const [customQuestions, setCustomQuestions] = useState([]);
  const [newQuestion, setNewQuestion] = useState({
    q: "",
    options: [],
    answer: "",
    word: "",
    translation: "",
  });
  const [creatingTest, setCreatingTest] = useState(false);
  const [testType, setTestType] = useState("");

  useEffect(() => {
    if (currentTest) {
      setCurrentIndex(0);
      setShowTranslation(false);
      setSelectedOption(null);
      setScore(0);
      setCompleted(false);

      if (currentTest.type === "flashcards") {
        setQuestionOrder(currentTest.questions.map((_, idx) => idx));
      }
    }
  }, [currentTest]);

  const handleFlashcardAnswer = (know) => {
    if (know) setScore((prev) => prev + 1);

    setQuestionOrder((prevOrder) => {
      const newOrder = [...prevOrder];
      const currentQuestionIdx = newOrder[currentIndex];

      if (!know) {
        newOrder.splice(currentIndex, 1);
        newOrder.push(currentQuestionIdx);
      } else {
        newOrder.splice(currentIndex, 1);
      }

      if (newOrder.length === 0) {
        setCompleted(true);
        return [];
      }

      return newOrder;
    });

    setCurrentIndex((prev) => {
      return questionOrder.length > 1 ? prev : 0;
    });

    setShowTranslation(false);
  };
  const handleChoiceAnswer = (option) => {
    setSelectedOption(option);
    if (option === currentTest.questions[currentIndex].answer)
      setScore((prev) => prev + 1);
  };

  const nextChoiceQuestion = () => {
    setSelectedOption(null);
    if (currentIndex + 1 >= currentTest.questions.length) setCompleted(true);
    else setCurrentIndex((prev) => prev + 1);
  };

  const restartTest = () => {
    setCurrentIndex(0);
    setShowTranslation(false);
    setSelectedOption(null);
    setScore(0);
    setCompleted(false);

    if (currentTest.type === "flashcards") {
      setQuestionOrder(currentTest.questions.map((_, idx) => idx));
    }
  };

  const addCustomQuestion = () => {
    if (testType === "multiple-choice") {
      if (
        !newQuestion.q ||
        newQuestion.options.length < 2 ||
        !newQuestion.answer
      )
        return;
    } else {
      if (!newQuestion.word || !newQuestion.translation) return;
    }
    setCustomQuestions([...customQuestions, { ...newQuestion }]);
    setNewQuestion({
      q: "",
      options: [],
      answer: "",
      word: "",
      translation: "",
    });
  };

  const startCustomTest = () => {
    if (customQuestions.length === 0) return;
    setCurrentTest({
      id: "custom",
      type: testType,
      title: "Мій тест",
      icon: "📝",
      questions: customQuestions,
    });
    setCreatingTest(false);
  };

  if (!currentTest && !creatingTest) {
    return (
      <section className={`flashcard-container ${darkMode ? "dark" : "light"}`}>
        <h2>📚 Оберіть тест</h2>
        <div className="test-menu">
          {testsData.map((test) => (
            <div
              key={test.id}
              className="test-card"
              onClick={() => setCurrentTest(test)}
            >
              <div className="test-icon">{test.icon}</div>
              <div className="test-title">{test.title}</div>
            </div>
          ))}
        </div>
        <div className="create-test-bottom">
          <button onClick={() => setCreatingTest(true)}>
            ➕ Створити свій тест
          </button>
        </div>
      </section>
    );
  }

  if (creatingTest) {
    return (
      <section className={`flashcard-container ${darkMode ? "dark" : "light"}`}>
        <h2>🛠 Створення тесту</h2>
        {!testType ? (
          <div className="choose-type">
            <button onClick={() => setTestType("flashcards")}>Флешкарти</button>
            <button onClick={() => setTestType("multiple-choice")}>
              Граматика / Multiple-choice
            </button>
          </div>
        ) : (
          <div className="custom-test">
            {testType === "multiple-choice" ? (
              <>
                <input
                  type="text"
                  placeholder="Питання"
                  value={newQuestion.q}
                  onChange={(e) =>
                    setNewQuestion({ ...newQuestion, q: e.target.value })
                  }
                />
                <input
                  type="text"
                  placeholder="Опція 1"
                  onChange={(e) =>
                    setNewQuestion({
                      ...newQuestion,
                      options: [
                        e.target.value,
                        ...newQuestion.options.slice(1),
                      ],
                    })
                  }
                />
                <input
                  type="text"
                  placeholder="Опція 2"
                  onChange={(e) =>
                    setNewQuestion({
                      ...newQuestion,
                      options: [newQuestion.options[0], e.target.value],
                    })
                  }
                />
                <input
                  type="text"
                  placeholder="Правильна відповідь"
                  value={newQuestion.answer}
                  onChange={(e) =>
                    setNewQuestion({ ...newQuestion, answer: e.target.value })
                  }
                />
              </>
            ) : (
              <>
                <input
                  type="text"
                  placeholder="Слово / Фронт"
                  value={newQuestion.word}
                  onChange={(e) =>
                    setNewQuestion({ ...newQuestion, word: e.target.value })
                  }
                />
                <input
                  type="text"
                  placeholder="Переклад / Бек"
                  value={newQuestion.translation}
                  onChange={(e) =>
                    setNewQuestion({
                      ...newQuestion,
                      translation: e.target.value,
                    })
                  }
                />
              </>
            )}
            <button className="restart-btn" onClick={addCustomQuestion}>
              Додати питання
            </button>
            {customQuestions.length > 0 && (
              <button className="restart-btn" onClick={startCustomTest}>
                Розпочати тест
              </button>
            )}
            <button
              className="restart-btn"
              onClick={() => setCreatingTest(false)}
            >
              🔙 Повернутися до меню
            </button>
          </div>
        )}
      </section>
    );
  }

  const question =
    currentTest.type === "flashcards"
      ? currentTest.questions[questionOrder[currentIndex]]
      : currentTest.questions[currentIndex];

  return (
    <section className={`flashcard-container ${darkMode ? "dark" : "light"}`}>
      <h2>
        {currentTest.icon} {currentTest.title}
      </h2>
      <p className="progress-text">
        {currentTest.type === "flashcards"
          ? `Вибрано знаю: ${score}/${currentTest.questions.length}`
          : `Питання ${currentIndex + 1} з ${currentTest.questions.length}`}
      </p>

      {currentTest.type === "flashcards" && !completed && question && (
        <>
          <div className="card-wrapper">
            <div
              className={`flashcard ${showTranslation ? "flipped" : ""}`}
              onClick={() => setShowTranslation(!showTranslation)}
            >
              <div className="front">{question.word}</div>
              <div className="back">{question.translation}</div>
            </div>
          </div>
          <div className="buttons-wrapper">
            <button
              className="btn dont-know"
              onClick={() => handleFlashcardAnswer(false)}
            >
              ❌ Не знаю
            </button>
            <button
              className="btn know"
              onClick={() => handleFlashcardAnswer(true)}
            >
              ✅ Знаю
            </button>
          </div>
        </>
      )}

      {currentTest.type === "multiple-choice" && !completed && (
        <>
          <p>{question.q || question.question}</p>
          <div className="buttons-wrapper">
            {question.options.map((opt) => (
              <button
                key={opt}
                className={`btn ${selectedOption === opt ? "selected" : ""}`}
                onClick={() => handleChoiceAnswer(opt)}
              >
                {opt}
              </button>
            ))}
          </div>
          <div className="navigation">
            {selectedOption && (
              <button className="restart-btn" onClick={nextChoiceQuestion}>
                ➡️ Далій
              </button>
            )}
          </div>
        </>
      )}

      {completed && (
        <>
          <h3>Тест завершено!</h3>
          <p>
            Ваші бали: {score}/{currentTest.questions.length}
          </p>
          <button className="restart-btn" onClick={restartTest}>
            🔄 Пройти знову
          </button>
          <button className="restart-btn" onClick={() => setCurrentTest(null)}>
            🏠 Повернутися до меню
          </button>
        </>
      )}
    </section>
  );
}

export default Test;
