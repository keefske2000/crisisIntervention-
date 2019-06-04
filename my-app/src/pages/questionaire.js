
import React from 'react';
import * as Survey from 'survey-react';
Survey.StylesManager.applyTheme("bootstrap");


    
   
   var surveyJSON = {
    "pages": [
     {
      "name": "Page 1",
      "elements": [
       {
        "type": "text",
        "name": "Sex:",
        "visibleIf": "Male or Female",
        "isRequired": true
       },
       {
        "type": "dropdown",
        "name": "Race",
        "isRequired": true,
        "choices": [
         {
          "value": "item1",
          "text": "White"
         },
         {
          "value": "item2",
          "text": "African American "
         },
         {
          "value": "item3",
          "text": "Native American/Alaskan Native"
         },
         {
          "value": "item4",
          "text": "Pacific Islander"
         },
         {
          "value": "item5",
          "text": "Asian"
         },
         {
          "value": "item6",
          "text": "Native Hawaiian "
         },
         {
          "value": "item7",
          "text": "Two or more "
         }
        ]
       },
       {
        "type": "text",
        "name": "Date of Assessment ",
        "isRequired": true,
        "inputType": "date"
       },
       {
        "type": "dropdown",
        "name": "Engagement Method",
        "isRequired": true,
        "choices": [
         {
          "value": "item1",
          "text": "In Person"
         },
         {
          "value": "item2",
          "text": "Reported by Third Person "
         }
        ]
       },
       {
        "type": "text",
        "name": "Engage Time",
        "isRequired": true,
        "inputType": "time"
       },
       {
        "type": "text",
        "name": "Disengage Time",
        "isRequired": true,
        "inputType": "time"
       },
       {
        "type": "checkbox",
        "name": "Crisis Type ",
        "choices": [
         "Suicidal w/Plan",
         {
          "value": "item3",
          "text": "Suicidal w/out Plan"
         },
         {
          "value": "item4",
          "text": "Homicidal w/Target "
         },
         {
          "value": "item5",
          "text": "Homicidal w/out Target"
         },
         {
          "value": "item6",
          "text": "Hoarding"
         },
         {
          "value": "item7",
          "text": "Self-Neglect"
         },
         {
          "value": "item8",
          "text": "Symptomatic of Mental Illness"
         },
         {
          "value": "item9",
          "text": "Initial Episode "
         },
         {
          "value": "item10",
          "text": "No medications "
         },
         {
          "value": "item11",
          "text": "Violent "
         },
         {
          "value": "item12",
          "text": "Medial Issue "
         },
         {
          "value": "item13",
          "text": "Substance Use "
         }
        ],
        "colCount": 4
       }
      ],
      "title": "Individuals Demographic Information "
     },
     {
      "name": "Page 2",
      "elements": [
       {
        "type": "radiogroup",
        "name": "question1",
        "title": "Suicidal Ideation (thoughts stated to others or observed)?",
        "isRequired": true,
        "choices": [
         {
          "value": "item1",
          "text": "Yes"
         },
         {
          "value": "item2",
          "text": "No"
         },
         {
          "value": "item3",
          "text": "Unknown"
         }
        ]
       },
       {
        "type": "radiogroup",
        "name": "question2",
        "title": "Homicidal Ideation (thoughts stated to others or observed)?",
        "isRequired": true,
        "choices": [
         {
          "value": "item1",
          "text": "Yes"
         },
         {
          "value": "item2",
          "text": "No"
         },
         {
          "value": "item3",
          "text": "Unknown"
         }
        ]
       },
       {
        "type": "radiogroup",
        "name": "question3",
        "title": "Suicidal Plan/Intent/Means?",
        "isRequired": true,
        "choices": [
         {
          "value": "item1",
          "text": "Yes"
         },
         {
          "value": "item2",
          "text": "No"
         },
         {
          "value": "item3",
          "text": "Unknown"
         }
        ]
       },
       {
        "type": "radiogroup",
        "name": "question4",
        "title": "Homicidal Plan/Intent/Means?",
        "isRequired": true,
        "choices": [
         {
          "value": "item1",
          "text": "Yes"
         },
         {
          "value": "item2",
          "text": "No"
         },
         {
          "value": "item3",
          "text": "Unknown"
         }
        ]
       },
       {
        "type": "radiogroup",
        "name": "question5",
        "title": "History of non-compliance with psychiatric medication?",
        "isRequired": true,
        "choices": [
         {
          "value": "item1",
          "text": "Yes"
         },
         {
          "value": "item2",
          "text": "No"
         },
         {
          "value": "item3",
          "text": "Unknown"
         }
        ]
       },
       {
        "type": "radiogroup",
        "name": "question6",
        "title": "Observable symptoms of severe and persistent mental illness?",
        "isRequired": true,
        "choices": [
         {
          "value": "item1",
          "text": "Yes"
         },
         {
          "value": "item2",
          "text": "No"
         },
         {
          "value": "item3",
          "text": "Unknown"
         }
        ]
       },
       {
        "type": "radiogroup",
        "name": "question7",
        "title": "History (or family history) of suicidal attempts?",
        "isRequired": true,
        "choices": [
         {
          "value": "item1",
          "text": "Yes"
         },
         {
          "value": "item2",
          "text": "No"
         },
         {
          "value": "item3",
          "text": "Unknown"
         }
        ]
       },
       {
        "type": "radiogroup",
        "name": "question8",
        "title": "Other risk factors identified?",
        "isRequired": true,
        "choices": [
         {
          "value": "item1",
          "text": "Yes"
         },
         {
          "value": "item2",
          "text": "No"
         },
         {
          "value": "item3",
          "text": "Unknown"
         }
        ]
       },
       {
        "type": "radiogroup",
        "name": "question9",
        "title": "History of violence/threats towards others?",
        "isRequired": true,
        "choices": [
         {
          "value": "item1",
          "text": "Yes"
         },
         {
          "value": "item2",
          "text": "No"
         },
         {
          "value": "item3",
          "text": "Unknown"
         }
        ]
       }
      ],
      "title": "Lethality Screening",
      "description": "Please use consumer's responses, your observations, and collateral information to answer below."
     },
     {
      "name": "Page 3",
      "elements": [
       {
        "type": "radiogroup",
        "name": "question10",
        "title": "Does the individual appear angry or agitated?",
        "isRequired": true,
        "choices": [
         {
          "value": "item1",
          "text": "Yes "
         },
         {
          "value": "item2",
          "text": "No"
         },
         {
          "value": "item3",
          "text": "Unknown"
         }
        ]
       },
       {
        "type": "radiogroup",
        "name": "question11",
        "title": "Is consumer presently psychotic?",
        "isRequired": true,
        "choices": [
         {
          "value": "item1",
          "text": "Yes "
         },
         {
          "value": "item2",
          "text": "No"
         },
         {
          "value": "item3",
          "text": "Unknown"
         }
        ]
       },
       {
        "type": "radiogroup",
        "name": "question12",
        "title": "Has consumer ever been treated for mental illness?",
        "isRequired": true,
        "choices": [
         {
          "value": "item1",
          "text": "Yes "
         },
         {
          "value": "item2",
          "text": "No"
         },
         {
          "value": "item3",
          "text": "Unknown"
         }
        ]
       },
       {
        "type": "radiogroup",
        "name": "question13",
        "title": " Does consumer have a history of non-compliance with psychiatric medications?",
        "isRequired": true,
        "choices": [
         {
          "value": "item1",
          "text": "Yes "
         },
         {
          "value": "item2",
          "text": "No"
         },
         {
          "value": "item3",
          "text": "Unknown"
         }
        ]
       },
       {
        "type": "radiogroup",
        "name": "question14",
        "title": "Does consumer have a history of substance abuse?",
        "isRequired": true,
        "choices": [
         {
          "value": "item1",
          "text": "Yes "
         },
         {
          "value": "item2",
          "text": "No"
         },
         {
          "value": "item3",
          "text": "Unknown"
         }
        ]
       },
       {
        "type": "radiogroup",
        "name": "question15",
        "title": "Does consumer have a history of head injury/seizures?",
        "isRequired": true,
        "choices": [
         {
          "value": "item1",
          "text": "Yes "
         },
         {
          "value": "item2",
          "text": "No"
         },
         {
          "value": "item3",
          "text": "Unknown"
         }
        ]
       },
       {
        "type": "radiogroup",
        "name": "question16",
        "title": "Does consumer have a history of criminal behavior and/or pending legal charges?",
        "isRequired": true,
        "choices": [
         {
          "value": "item1",
          "text": "Yes "
         },
         {
          "value": "item2",
          "text": "No"
         },
         {
          "value": "item3",
          "text": "Unknown"
         }
        ]
       },
       {
        "type": "radiogroup",
        "name": "question17",
        "title": "Does consumer have a history of use of weapons?",
        "isRequired": true,
        "choices": [
         {
          "value": "item1",
          "text": "Yes "
         },
         {
          "value": "item2",
          "text": "No"
         },
         {
          "value": "item3",
          "text": "Unknown"
         }
        ]
       },
       {
        "type": "radiogroup",
        "name": "question18",
        "title": " Does consumer have history of fire setting/animal cruelty?",
        "isRequired": true,
        "choices": [
         {
          "value": "item1",
          "text": "Yes "
         },
         {
          "value": "item2",
          "text": "No"
         },
         {
          "value": "item3",
          "text": "Unknown"
         }
        ]
       },
       {
        "type": "radiogroup",
        "name": "question19",
        "title": " Does consumer have a family history of violence?",
        "isRequired": true,
        "choices": [
         {
          "value": "item1",
          "text": "Yes "
         },
         {
          "value": "item2",
          "text": "No"
         },
         {
          "value": "item3",
          "text": "Unknown"
         }
        ]
       },
       {
        "type": "radiogroup",
        "name": "question20",
        "title": "Does consumer have a history of violence towards others?",
        "isRequired": true,
        "hasOther": true,
        "choices": [
         {
          "value": "item1",
          "text": "Yes "
         },
         {
          "value": "item2",
          "text": "No"
         }
        ],
        "otherText": "Unknown"
       },
       {
        "type": "radiogroup",
        "name": "question21",
        "title": "Does consumer have history of sexual/physical abuse (victim)?",
        "isRequired": true,
        "hasOther": true,
        "choices": [
         {
          "value": "item1",
          "text": "Yes "
         },
         {
          "value": "item2",
          "text": "No"
         }
        ],
        "otherText": "Unknown"
       },
       {
        "type": "radiogroup",
        "name": "question22",
        "title": "Does consumer have history of sexual/physical abuse (perpetrator)?",
        "isRequired": true,
        "choices": [
         {
          "value": "item1",
          "text": "Yes "
         },
         {
          "value": "item2",
          "text": "No"
         },
         {
          "value": "item3",
          "text": "Unknown "
         }
        ]
       },
       {
        "type": "radiogroup",
        "name": "question23",
        "title": "Is consumer currently speaking and/or behaving in a threatening manner?",
        "isRequired": true,
        "choices": [
         {
          "value": "item1",
          "text": "Yes "
         },
         {
          "value": "item2",
          "text": "No"
         },
         {
          "value": "item3",
          "text": "Unknown "
         }
        ]
       },
       {
        "type": "radiogroup",
        "name": "question24",
        "title": "Does consumer currently hear voices telling them to hurt others?",
        "isRequired": true,
        "choices": [
         {
          "value": "item1",
          "text": "Yes "
         },
         {
          "value": "item2",
          "text": "No"
         },
         {
          "value": "item3",
          "text": "Unknown "
         }
        ]
       },
       {
        "type": "radiogroup",
        "name": "question25",
        "title": " Does consumer have plan/means to hurt specific person(s)?",
        "isRequired": true,
        "choices": [
         {
          "value": "item1",
          "text": "Yes "
         },
         {
          "value": "item2",
          "text": "No"
         },
         {
          "value": "item3",
          "text": "Unknown "
         }
        ]
       }
      ],
      "title": "Violence Risk Assessment "
     },
     {
      "name": "Page 4",
      "elements": [
       {
        "type": "radiogroup",
        "name": "question26",
        "title": "Is the consumer clinically depressed or appeared to be in a depressed mood?",
        "isRequired": true,
        "choices": [
         {
          "value": "item1",
          "text": "Yes"
         },
         {
          "value": "item2",
          "text": "No"
         },
         {
          "value": "item3",
          "text": "Unknown "
         }
        ]
       },
       {
        "type": "radiogroup",
        "name": "question27",
        "title": "Has consumer experienced a recent elevation in mood?",
        "isRequired": true,
        "choices": [
         {
          "value": "item1",
          "text": "Yes"
         },
         {
          "value": "item2",
          "text": "No"
         },
         {
          "value": "item3",
          "text": "Unknown "
         }
        ]
       },
       {
        "type": "radiogroup",
        "name": "question28",
        "title": " Is consumer presently psychotic?",
        "isRequired": true,
        "choices": [
         {
          "value": "item1",
          "text": "Yes"
         },
         {
          "value": "item2",
          "text": "No"
         },
         {
          "value": "item3",
          "text": "Unknown "
         }
        ]
       },
       {
        "type": "radiogroup",
        "name": "question29",
        "title": " Has consumer ever been treated for mental illness?",
        "isRequired": true,
        "choices": [
         {
          "value": "item1",
          "text": "Yes"
         },
         {
          "value": "item2",
          "text": "No"
         },
         {
          "value": "item3",
          "text": "Unknown "
         }
        ]
       },
       {
        "type": "radiogroup",
        "name": "question30",
        "title": "Does the consumer have a history of non-compliance with psychiatric medications?",
        "isRequired": true,
        "choices": [
         {
          "value": "item1",
          "text": "Yes"
         },
         {
          "value": "item2",
          "text": "No"
         },
         {
          "value": "item3",
          "text": "Unknown "
         }
        ]
       },
       {
        "type": "radiogroup",
        "name": "question31",
        "title": "Does consumer have a debilitating medical illness?",
        "isRequired": true,
        "choices": [
         {
          "value": "item1",
          "text": "Yes"
         },
         {
          "value": "item2",
          "text": "No"
         },
         {
          "value": "item3",
          "text": "Unknown "
         }
        ]
       },
       {
        "type": "radiogroup",
        "name": "question32",
        "title": "Does consumer have a history of substance use?",
        "isRequired": true,
        "choices": [
         {
          "value": "item1",
          "text": "Yes"
         },
         {
          "value": "item2",
          "text": "No"
         },
         {
          "value": "item3",
          "text": "Unknown "
         }
        ]
       },
       {
        "type": "radiogroup",
        "name": "question33",
        "title": "Is the consumer isolated w/o friends or family support?",
        "isRequired": true,
        "choices": [
         {
          "value": "item1",
          "text": "Yes"
         },
         {
          "value": "item2",
          "text": "No"
         },
         {
          "value": "item3",
          "text": "Unknown "
         }
        ]
       },
       {
        "type": "radiogroup",
        "name": "question34",
        "title": "Has the consumer sustained a recent loss (last 3 months)? i.e. job, loved one, friend, money, home, status, etc?",
        "isRequired": true,
        "choices": [
         {
          "value": "item1",
          "text": "Yes"
         },
         {
          "value": "item2",
          "text": "No"
         },
         {
          "value": "item3",
          "text": "Unknown "
         }
        ]
       },
       {
        "type": "radiogroup",
        "name": "question35",
        "title": "Has a member of the consumer's family ever attempted suicide?",
        "isRequired": true,
        "choices": [
         {
          "value": "item1",
          "text": "Yes"
         },
         {
          "value": "item2",
          "text": "No"
         },
         {
          "value": "item3",
          "text": "Unknown "
         }
        ]
       },
       {
        "type": "radiogroup",
        "name": "question36",
        "title": "Does consumer say s/he wishes to die?",
        "isRequired": true,
        "choices": [
         {
          "value": "item1",
          "text": "Yes"
         },
         {
          "value": "item2",
          "text": "No"
         },
         {
          "value": "item3",
          "text": "Unknown "
         }
        ]
       },
       {
        "type": "radiogroup",
        "name": "question37",
        "title": "Has consumer ever attempted suicide?",
        "isRequired": true,
        "choices": [
         {
          "value": "item1",
          "text": "Yes"
         },
         {
          "value": "item2",
          "text": "No"
         },
         {
          "value": "item3",
          "text": "Unknown "
         }
        ]
       },
       {
        "type": "radiogroup",
        "name": "question38",
        "title": "Is consumer regretful that his/her attempt failed?",
        "isRequired": true,
        "choices": [
         {
          "value": "item1",
          "text": "Yes"
         },
         {
          "value": "item2",
          "text": "No"
         },
         {
          "value": "item3",
          "text": "Unknown "
         }
        ]
       },
       {
        "type": "radiogroup",
        "name": "question39",
        "title": "Does consumer plan to try suicide again?",
        "isRequired": true,
        "choices": [
         {
          "value": "item1",
          "text": "Yes"
         },
         {
          "value": "item2",
          "text": "No"
         },
         {
          "value": "item3",
          "text": "Unknown "
         }
        ]
       },
       {
        "type": "radiogroup",
        "name": "question40",
        "title": " Has consumer made a current decision to kill him/herself?",
        "isRequired": true,
        "choices": [
         {
          "value": "item1",
          "text": "Yes"
         },
         {
          "value": "item2",
          "text": "No"
         },
         {
          "value": "item3",
          "text": "Unknown "
         }
        ]
       },
       {
        "type": "radiogroup",
        "name": "question41",
        "title": " Does consumer hear voices telling him/her to kill self?",
        "isRequired": true,
        "choices": [
         {
          "value": "item1",
          "text": "Yes"
         },
         {
          "value": "item2",
          "text": "No"
         },
         {
          "value": "item3",
          "text": "Unknown "
         }
        ]
       },
       {
        "type": "radiogroup",
        "name": "question42",
        "title": "Does consumer have a lethal plan of action and the means to carry the plan out?",
        "isRequired": true,
        "choices": [
         {
          "value": "item1",
          "text": "Yes"
         },
         {
          "value": "item2",
          "text": "No"
         },
         {
          "value": "item3",
          "text": "Unknown "
         }
        ]
       },
       {
        "type": "radiogroup",
        "name": "Evaluation: HIGH (If answer to any question numbered 45-49 is YES)",
        "choices": [
         {
          "value": "item1",
          "text": "Yes"
         },
         {
          "value": "item2",
          "text": "No"
         }
        ]
       }
      ],
      "title": "Suicidal Risk Assessment "
     },
     {
      "name": "Page 5",
      "elements": [
       {
        "type": "radiogroup",
        "name": "question43",
        "title": "Ongoing mental health treatmetn in the community?",
        "isRequired": true,
        "choices": [
         {
          "value": "item1",
          "text": "Yes"
         },
         {
          "value": "item2",
          "text": "No"
         },
         {
          "value": "item3",
          "text": "Unknown "
         }
        ]
       },
       {
        "type": "radiogroup",
        "name": "question44",
        "title": "Physical Health Problems?",
        "isRequired": true,
        "choices": [
         {
          "value": "item1",
          "text": "Yes"
         },
         {
          "value": "item2",
          "text": "No"
         },
         {
          "value": "item3",
          "text": "Unknown "
         }
        ]
       },
       {
        "type": "radiogroup",
        "name": "question45",
        "title": "Ongoing physical health treatment in the community?",
        "isRequired": true,
        "choices": [
         {
          "value": "item1",
          "text": "Yes"
         },
         {
          "value": "item2",
          "text": "No"
         },
         {
          "value": "item3",
          "text": "Unknown "
         }
        ]
       },
       {
        "type": "radiogroup",
        "name": "question46",
        "title": "Housing/ Social Problems?",
        "isRequired": true,
        "choices": [
         {
          "value": "item1",
          "text": "Yes"
         },
         {
          "value": "item2",
          "text": "No"
         },
         {
          "value": "item3",
          "text": "Unknown "
         }
        ]
       },
       {
        "type": "radiogroup",
        "name": "question47",
        "title": " Self Neglect Concerns?",
        "isRequired": true,
        "choices": [
         {
          "value": "item1",
          "text": "Yes"
         },
         {
          "value": "item2",
          "text": "No"
         },
         {
          "value": "item3",
          "text": "Unknown "
         }
        ]
       },
       {
        "type": "radiogroup",
        "name": "question48",
        "title": " Support persons/systems available?",
        "isRequired": true,
        "choices": [
         {
          "value": "item1",
          "text": "Yes"
         },
         {
          "value": "item2",
          "text": "No"
         },
         {
          "value": "item3",
          "text": "Unknown "
         }
        ]
       },
       {
        "type": "radiogroup",
        "name": "question49",
        "title": " Other risk factors identified or concerned about?",
        "isRequired": true,
        "choices": [
         {
          "value": "item1",
          "text": "Yes"
         },
         {
          "value": "item2",
          "text": "No"
         },
         {
          "value": "item3",
          "text": "Unknown "
         }
        ]
       }
      ],
      "title": "General Screening",
      "description": "Please use consumer's responses, your observations, and referral/collateral information to answer questions below."
     },
     {
      "name": "Page 6",
      "elements": [
       {
        "type": "radiogroup",
        "name": "question50",
        "title": "Any history of psychiatric treatment (hospitals, crisis response centers, or mental health oupatient programs)?",
        "isRequired": true,
        "choices": [
         {
          "value": "item1",
          "text": "Yes"
         },
         {
          "value": "item2",
          "text": "No"
         },
         {
          "value": "item3",
          "text": "Unknown "
         }
        ]
       },
       {
        "type": "checkbox",
        "name": "question51",
        "title": "Physical Appearance",
        "isRequired": true,
        "choices": [
         {
          "value": "item1",
          "text": "Appropriate"
         },
         {
          "value": "item2",
          "text": " Well groomed"
         },
         {
          "value": "item3",
          "text": "Disheveled"
         },
         {
          "value": "item4",
          "text": "Underweight"
         },
         {
          "value": "item5",
          "text": "Well nourished"
         },
         {
          "value": "item6",
          "text": "Overweight"
         },
         {
          "value": "item7",
          "text": " Malodorous "
         }
        ],
        "colCount": 4
       },
       {
        "type": "checkbox",
        "name": "question52",
        "title": "Motor Activity/ Involuntary Movements",
        "isRequired": true,
        "choices": [
         {
          "value": "item1",
          "text": "With In Normal Limits/ WNL"
         },
         {
          "value": "item2",
          "text": "Tremor "
         },
         {
          "value": "item3",
          "text": "Tense "
         },
         {
          "value": "item4",
          "text": "Hyperactive"
         },
         {
          "value": "item5",
          "text": "Slow "
         }
        ]
       },
       {
        "type": "checkbox",
        "name": "question53",
        "title": "Behavior/Attitude",
        "isRequired": true,
        "choices": [
         {
          "value": "item1",
          "text": "Cooperative"
         },
         {
          "value": "item2",
          "text": "Withdrawn "
         },
         {
          "value": "item3",
          "text": "Guarded "
         },
         {
          "value": "item4",
          "text": "Belligerent "
         },
         {
          "value": "item5",
          "text": "Combative"
         },
         {
          "value": "item6",
          "text": " Dramatic"
         },
         {
          "value": "item7",
          "text": "Agitated "
         },
         {
          "value": "item8",
          "text": "Suspicious"
         }
        ],
        "colCount": 5
       },
       {
        "type": "checkbox",
        "name": "question56",
        "title": "Behavior/Attitude",
        "isRequired": true,
        "choices": [
         {
          "value": "item1",
          "text": "Cooperative"
         },
         {
          "value": "item2",
          "text": "Withdrawn "
         },
         {
          "value": "item3",
          "text": "Guarded "
         },
         {
          "value": "item4",
          "text": "Belligerent "
         },
         {
          "value": "item5",
          "text": "Combative"
         },
         {
          "value": "item6",
          "text": " Dramatic"
         },
         {
          "value": "item7",
          "text": "Agitated "
         },
         {
          "value": "item8",
          "text": "Suspicious"
         }
        ],
        "colCount": 4
       },
       {
        "type": "checkbox",
        "name": "question54",
        "title": "Speech",
        "isRequired": true,
        "choices": [
         {
          "value": "item1",
          "text": "With Normal Limits/WNL"
         },
         {
          "value": "item2",
          "text": "Slowed "
         },
         {
          "value": "item3",
          "text": "Slurred"
         },
         {
          "value": "item4",
          "text": "Garbled"
         },
         {
          "value": "item5",
          "text": "Hesitant"
         },
         {
          "value": "item6",
          "text": " Low"
         },
         {
          "value": "item7",
          "text": "Loud"
         },
         {
          "value": "item8",
          "text": "Rapid"
         },
         {
          "value": "item9",
          "text": "Hyper"
         },
         {
          "value": "item10",
          "text": "Pressured"
         },
         {
          "value": "item11",
          "text": "Mute"
         },
         {
          "value": "item12",
          "text": "Monotone"
         }
        ],
        "colCount": 5
       },
       {
        "type": "checkbox",
        "name": "question55",
        "title": "Mood",
        "isRequired": true,
        "choices": [
         {
          "value": "item1",
          "text": "With Normal Limits/WNL"
         },
         {
          "value": "item2",
          "text": "Depressed"
         },
         {
          "value": "item3",
          "text": "Anxious"
         },
         {
          "value": "item4",
          "text": "Angry"
         },
         {
          "value": "item5",
          "text": "Euphoric"
         },
         {
          "value": "item6",
          "text": "Apathetic"
         },
         {
          "value": "item7",
          "text": "Irritable "
         },
         {
          "value": "item8",
          "text": "Fearful"
         }
        ],
        "colCount": 3
       },
       {
        "type": "checkbox",
        "name": "question57",
        "title": "Affect",
        "isRequired": true,
        "choices": [
         {
          "value": "item1",
          "text": "Constricted"
         },
         {
          "value": "item2",
          "text": "Labile"
         },
         {
          "value": "item3",
          "text": "Elated"
         },
         {
          "value": "item4",
          "text": "inappropriate "
         },
         {
          "value": "item5",
          "text": "Flat"
         },
         {
          "value": "item6",
          "text": "Expansive"
         },
         {
          "value": "item7",
          "text": "Incongruent/mood"
         },
         {
          "value": "item8",
          "text": "Blunted"
         }
        ],
        "colCount": 3
       },
       {
        "type": "checkbox",
        "name": "question58",
        "title": "Thought Process",
        "isRequired": true,
        "choices": [
         {
          "value": "item1",
          "text": "Goal Directed"
         },
         {
          "value": "item2",
          "text": "Tangential"
         },
         {
          "value": "item4",
          "text": "Circumstantial"
         },
         {
          "value": "item5",
          "text": "Loosely Associated Ideas"
         },
         {
          "value": "item7",
          "text": "Racing Thoughts"
         },
         {
          "value": "item8",
          "text": "Blocking"
         }
        ],
        "colCount": 3
       },
       {
        "type": "checkbox",
        "name": "question59",
        "title": "Thought Content",
        "isRequired": true,
        "choices": [
         {
          "value": "item1",
          "text": "Appropriate"
         },
         {
          "value": "item2",
          "text": "Preoccupations"
         },
         {
          "value": "item4",
          "text": "Self Doubt"
         },
         {
          "value": "item5",
          "text": "Phobias"
         },
         {
          "value": "item7",
          "text": "Blaming"
         },
         {
          "value": "item8",
          "text": "Guilt"
         }
        ],
        "colCount": 3
       }
      ],
      "title": "History of Psychiatric Treatment and Observational presentation of the individual being assessed",
      "description": "Answer these observational categories to the best of your ability."
     },
     {
      "name": "Page 7",
      "elements": [
       {
        "type": "checkbox",
        "name": "question60",
        "title": "Delusions ?",
        "isRequired": true,
        "choices": [
         {
          "value": "item1",
          "text": "Jealous"
         },
         {
          "value": "item2",
          "text": "Grandiose"
         },
         {
          "value": "item3",
          "text": "Somatic"
         },
         {
          "value": "item4",
          "text": "Bizarre"
         },
         {
          "value": "item5",
          "text": "Paranoia"
         },
         {
          "value": "item6",
          "text": "Persecutory "
         },
         {
          "value": "item7",
          "text": "Religiosity "
         },
         {
          "value": "item8",
          "text": "Erotomanic"
         }
        ],
        "colCount": 3
       },
       {
        "type": "radiogroup",
        "name": "question61",
        "title": "Suicidal Ideation ?",
        "isRequired": true,
        "choices": [
         {
          "value": "item1",
          "text": "Yes; if yes, Plan/Means available "
         },
         {
          "value": "item2",
          "text": "Yes"
         },
         {
          "value": "item3",
          "text": "No"
         },
         {
          "value": "item4",
          "text": "Unknown "
         }
        ]
       },
       {
        "type": "radiogroup",
        "name": "question62",
        "title": "Homicidal Ideation?",
        "isRequired": true,
        "choices": [
         {
          "value": "item1",
          "text": "Yes; (target/Name)"
         },
         {
          "value": "item3",
          "text": "No"
         },
         {
          "value": "item4",
          "text": "Unknown "
         }
        ]
       },
       {
        "type": "radiogroup",
        "name": "question63",
        "title": "Hallucinations Perceptions?",
        "isRequired": true,
        "choices": [
         {
          "value": "item1",
          "text": "Auditory"
         },
         {
          "value": "item3",
          "text": "Visual "
         },
         {
          "value": "item4",
          "text": "Tactile "
         },
         {
          "value": "item5",
          "text": "Olfactory "
         },
         {
          "value": "item6",
          "text": "Command"
         },
         {
          "value": "item7",
          "text": "Illusions"
         }
        ],
        "colCount": 3
       },
       {
        "type": "radiogroup",
        "name": "question64",
        "title": "Insight?",
        "isRequired": true,
        "choices": [
         {
          "value": "item1",
          "text": "Good"
         },
         {
          "value": "item3",
          "text": "Poor"
         },
         {
          "value": "item5",
          "text": "Fair"
         },
         {
          "value": "item6",
          "text": "Superficial "
         }
        ],
        "colCount": 2
       },
       {
        "type": "radiogroup",
        "name": "question65",
        "title": "Judgement ?",
        "isRequired": true,
        "choices": [
         {
          "value": "item1",
          "text": "With in Normal Limits/WNL"
         },
         {
          "value": "item3",
          "text": "Impulsive "
         },
         {
          "value": "item5",
          "text": "Impaired"
         }
        ],
        "colCount": 2
       },
       {
        "type": "radiogroup",
        "name": "question66",
        "title": "Attention ?",
        "isRequired": true,
        "choices": [
         {
          "value": "item1",
          "text": "With in Normal Limits/WNL"
         },
         {
          "value": "item3",
          "text": "Shortened"
         },
         {
          "value": "item5",
          "text": "Distractible "
         },
         {
          "value": "item6",
          "text": "Confused"
         }
        ],
        "colCount": 2
       },
       {
        "type": "radiogroup",
        "name": "question67",
        "title": "Orientation ?",
        "isRequired": true,
        "choices": [
         {
          "value": "item1",
          "text": "Person "
         },
         {
          "value": "item3",
          "text": "Date"
         },
         {
          "value": "item5",
          "text": "Place"
         },
         {
          "value": "item6",
          "text": "Situation "
         }
        ],
        "colCount": 2
       }
      ],
      "title": "Continued: History of Psychiatric Treatment and Observational presentation of the individual being assessed",
      "description": "Answer these observational categories to the best of your ability."
     }
    ],
    "showNavigationButtons": "both",
    "showPageNumbers": true,
    "showProgressBar": "both"
    }
   
                  
   function Questionaire(survey) {
       
    ('4596a982-3304-4c55-987a-ea8416a17eee');

    
        return (

        <div id="surveyContainer">

        <Survey.Survey json={surveyJSON} onComplete={Questionaire}/>
    
    </div>
    );
        }


export default Questionaire;