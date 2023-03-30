export const dummy_data = [
    {
      section_title: "PART 1: Staff demographics & work history ",
      charts: [
        {
            "id": 1,
            "labels" : ["mean", "<1", "1-3", "4-6", "7-10", "10-20", "20+"],
            "dataSet": [
              {
                "name" : "All Museums",
                "data" : [6.891, 52, 32,  16,  98, 3, 2]
              },
              {
                "name" : "My Museum",
                "data" : [5.891, 42, 42,  26,  68, 3, 1]
              },
              {
                "name" : "Others in My Region",
                "data" : [8.891, 11, 12,  47,  68, 1, 8]
              },
              {
                "name" : "Other of Same Scale",
                "data" : [1.891, 52, 32,  16,  98, 3, 2]
              },
              {
                "name" : "Others of the Same Type",
                "data" : [2.891, 37, 46,  55,  26, 1, 8]
              },
              {
                "name" : "Others matching Collecting/Non-Collecting",
                "data" : [1.891, 52, 32,  16,  98, 3, 2]
              },
            ],
            "questionName": "Approximately how long have you been working in the art museum field (in years)?",
            "graphType": "column",
            "questionType": "radiogroup"
          },
          {
            "id": 2,
            "labels" : ["mean", "<1", "1-3", "4-6", "7-10", "10-20", "20+"],
            "dataSet": [
              {
                "name" : "All Museums",
                 "data" : [1.891, 52, 32,  16,  98, 3, 2]
              },
              {
                "name" : "My Museum",
                "data" : [2.891, 37, 46,  55,  26, 1, 8]
              },
              {
                "name" : "Others in My Region",
                "data" : [3.891, 54, 4,  65,  21, 3, 3]
              },
              {
                "name" : "Other of Same Scale",
                "data" : [6.891, 52, 32,  16,  98, 3, 2]
              },
              {
                "name" : "Others of the Same Type",
                "data" : [2.891, 37, 46,  55,  26, 1, 8]
              },
              {
                "name" : "Others matching Collecting/Non-Collecting",
                "data" : [8.891, 11, 12,  47,  68, 1, 8]
              },
            ],
            "questionName": "And how long have you been working at your current museum (in years)?",
            "graphType": "column",
            "questionType": "radiogroup"
          },
          {
            "id": 3,
            "labels" : ["Voluntary", "Entry-level", "Associate/Experienced", "Manager", "Director", "Executive/Museum Leadership", "Prefer not to answer"],
            "dataSet": [
              {
                "name" : "All Museums",
                "data" : [15,21,4,5,2,13,1],
              },
              {
                "name" : "My Museum",
                "data" : [2,3,16,44,43,1,7],
              },
              {
                "name" : "Others in My Region",
                "data" : [54,32,41,15,0,0,0],
              },
              {
                "name" : "Other of Same Scale",
                "data" : [15,21,4,5,2,13,1],
              },
              {
                "name" : "Others of the Same Type",
                "data" : [2,3,16,44,43,1,7],
              },
              {
                "name" : "Others matching Collecting/Non-Collecting",
                "data" : [15,21,4,5,2,13,1],
              },
            ],
            "questionName": "Which of the following best describes your current position level in the museum?",
            "graphType": "column",
            "questionType": "radiogroup"
          },
          {
            "id": 4,
            "labels" : ["Full-time/ Permanent employee", "Part-time employee", "Temporary employee", "Seasonal employee", "Paid intern", "Unpaid intern", "Apprentice / Fellow", "Prefer not to answer"],
            "dataSet": [
              {
                "name" : "All Museums",
                "data" : [4, 17, 5, 29, 32, 6, 0, 3],
              },
              {
                "name" : "My Museum",
                "data" : [14, 7, 51, 2, 3, 36, 1, 9],
              },
              {
                "name" : "Others in My Region",
                "data" : [41, 37, 1, 1, 49, 21, 1, 2],
              },
              {
                "name" : "Other of Same Scale",
                "data" : [4, 17, 5, 29, 32, 6, 0, 3],
              },
              {
                "name" : "Others of the Same Type",
                "data" : [14, 7, 51, 2, 3, 36, 1, 9],
              },
              {
                "name" : "Others matching Collecting/Non-Collecting",
                "data" : [41, 37, 1, 1, 49, 21, 1, 2],
              },
            ],
            "questionName": "What type of position do you have at the museum?",
            "graphType": "column",
            "questionType": "radiogroup"
          },
          {
            "id": 5,
            "labels" : ["Administration", "Building Operations", "Collections", "Communications", "Public Engagement"],
            "dataSet": [
              {
                "name" : "All Museums",
                "data" : [5,51,33,12,17]
              },
              {
                "name" : "My Museum",
                "data" : [1,1,66,32,18]
              },
              {
                "name" : "Others in My Region",
                "data" : [41,11,27,35,1]
              },
              {
                "name" : "Other of Same Scale",
                "data" : [5,51,33,12,17]
              },
              {
                "name" : "Others of the Same Type",
                "data" : [1,1,66,32,18]
              },
              {
                "name" : "Others matching Collecting/Non-Collecting",
                "data" : [41,11,27,35,1]
              },
            ],
            "questionName": "Which of the following categories does your current museum position fall into? Please select ALL that apply.",
            "graphType": "column",
            "questionType": "checkbox"
          },
          {
            "id": 6,
            "labels" : ["The Silent Generation (1928-1945)", "Baby Boomers (1946-1964)", "Generation X (1965-1980)", "Millennial (1981-1996)", "Generation Z (1997-2012)"],
            "dataSet": [
              { 
                "name" : "All Museums",
                "data" : [15, 23, 34, 28, 13],
              },
              { 
                "name" : "My Museum",
                "data" : [1, 12, 13, 14, 57],
              },
              { 
                "name" : "Others in My Region",
                "data" : [1, 32, 32, 87, 1],
              },
              {
                "name" : "Other of Same Scale",
                "data" : [15, 23, 34, 28, 13],
              },
              {
                "name" : "Others of the Same Type",
                "data" : [1, 12, 13, 14, 57],
              },
              {
                "name" : "Others matching Collecting/Non-Collecting",
                "data" : [1, 32, 32, 87, 1],
              },
            ],
            "questionName": "In what year were you born?",
            "graphType": "column",
            "questionType": "checkbox"
          },
          {
            "id": 7,
            "labels" : ["Heterosexual", "LGBTQ", "Prefer Not To Answer"],
            "dataSet": [
              { 
                "name" : "All Museums",
                "data" : [35,12,3],
              },
              { 
                "name" : "My Museum",
                "data" : [12,54,33],
              },
              { 
                "name" : "Others in My Region",
                "data" : [13,54,21],
              },
              {
                "name" : "Other of Same Scale",
                "data" : [35,12,3],
              },
              {
                "name" : "Others of the Same Type",
                "data" : [12,54,33],
              },
              {
                "name" : "Others matching Collecting/Non-Collecting",
                "data" : [13,54,21],
              },
            ],
            "questionName": "How would you define your sexual orientation?",
            "graphType": "column",
            "questionType": "radiogroup"
          },
          {
            "id": 8,
            "labels" : ["Black or African American", "East Asian", "Hispanic, Latina, Latino, or Latinx", "Middle Eastern or North African", "Native American/Alaska Native/First Nations", "Native Hawaiian or other Pacific Islander", "South Asian", "Southeast Asian", "White", "Another race of ethnicity", "Prefer not to answer"],
            "dataSet": [
              {
                "name" : "All Museums",
                "data" : [13,4,7,11,1,19,2,1,1,7,2],
              },
              {
                "name" : "My Museum",
                "data" : [19,2,1,1,7,2,13,4,7,11,1],
              },
              {
                "name" : "Others in My Region",
                "data" : [7,11,1,19,2,1,1,7,2,13,4],
              },
              {
                "name" : "Other of Same Scale",
                "data" : [13,4,7,11,1,19,2,1,1,7,2],
              },
              {
                "name" : "Others of the Same Type",
                "data" : [7,11,1,19,2,1,1,7,2,13,4],
              },
              {
                "name" : "Others matching Collecting/Non-Collecting",
                "data" : [19,2,1,1,7,2,13,4,7,11,1],
              },
            ],
            "questionName": "With which of the following racial and ethnic groups do you identify as? Please select all that apply.",
            "graphType": "column",
            "questionType": "radiogroup"
          },
          {
            "id": 9,
            "labels" : ["Asian or Asian American", "Middle Eastern or North African", "Black or African American", "Hispanic or Latina/o/x", "Native American or Alaska Native", "Native Hawaiian or other Pacific Islander", "White or European American", "Multiracial", "Other Race", "Prefer Not To Answer"],
            "dataSet": [
              {
                "name" : "All Museums",
                "data" : [31, 1, 2, 1, 12, 7, 8, 9, 2, 17],
              },
              {
                "name" : "My Museum",
                "data" : [1, 12, 7, 1, 2, 8, 9, 2, 17, 31],
              },
              {
                "name" : "Others in My Region",
                "data" : [12, 7, 8, 9, 2, 17, 31, 1, 2, 1],
              },
              {
                "name" : "Other of Same Scale",
                "data" : [31, 1, 2, 1, 12, 7, 8, 9, 2, 17],
              },
              {
                "name" : "Others of the Same Type",
                "data" : [12, 7, 8, 9, 2, 17, 31, 1, 2, 1],
              },
              {
                "name" : "Others matching Collecting/Non-Collecting",
                "data" : [1, 12, 7, 1, 2, 8, 9, 2, 17, 31],
              },
            ],
            "questionName": "With which of the following racial and ethnic groups do you identify as? Please select all that apply. (Census Categories)",
            "graphType": "column",
            "questionType": "radiogroup"
          },
          {
            "id": 10,
            "labels" : ["Some high school", "High school graduate", "Some college/Associates degree", "Bachelor’s degree", "Master’s degree", "Professional or doctorate degree", "Prefer Not To Answer"],
            "dataSet": [
              {
                "name" : "All Museums",
                "data" : [31,9,2,1,2,16,23],
              },
              {
                "name" : "My Museum",
                "data" : [23,31,9,2,1,2,16],
              },
              {
                "name" : "Others in My Region",
                "data" : [16,23,31,9,2,1,2],
              },
              {
                "name" : "Other of Same Scale",
                "data" : [31,9,2,1,2,16,23],
              },
              {
                "name" : "Others of the Same Type",
                "data" : [23,31,9,2,1,2,16],
              },
              {
                "name" : "Others matching Collecting/Non-Collecting",
                "data" : [16,23,31,9,2,1,2],
              },
            ],
            "questionName": "What is the highest level of education that you’ve completed?",
            "graphType": "column",
            "questionType": "radiogroup"
          },
          {
            "id": 11,
            "labels" : ["Yes","No","Prefer Not To Answer"],
            "dataSet": [
              {
                "name" : "All Museums",
                "data" : [43,25,1]
              },
              {
                "name" : "My Museum",
                "data" : [1,34,12]
              },
              {
                "name" : "Others in My Region",
                "data" : [1,87,32]
              },
              {
                "name" : "Other of Same Scale",
                "data" : [43,25,1]
              },
              {
                "name" : "Others of the Same Type",
                "data" : [1,87,32]
              },
              {
                "name" : "Others matching Collecting/Non-Collecting",
                "data" : [43,25,1]
              },
            ],
            "questionName": "Do you identify as a person with a disability and/or as neuroatypical/neurodivergent?",
            "graphType": "column",
            "questionType": "radiogroup"
          },
        ]
      },
      {
        section_title: "PART 2: Compensation details & promotion rates",
        charts: [
          {
            "id": 12,
            "labels" : ["Annual Salary","Hourly Wage","Stipend","This is a voluntary (unpaid) position"],
            "dataSet": [
              {
                "name" : "All Museums",
                "data" : [43,25,1,4]
              },
              {
                "name" : "My Museum",
                "data" : [1,34,12,4]
              },
              {
                "name" : "Others in My Region",
                "data" : [1,87,32,4]
              },
              {
                "name" : "Other of Same Scale",
                "data" : [43,25,1,4]
              },
              {
                "name" : "Others of the Same Type",
                "data" : [1,87,32,4]
              },
              {
                "name" : "Others matching Collecting/Non-Collecting",
                "data" : [43,25,1,4]
              },
            ],
            "questionName": "How are you compensated in this position?",
            "graphType": "column",
            "questionType": "radiogroup"
          },
          {
            "id": 13,
            "labels" : ["Above others","About the same as others","Below others","N/A, there aren’t others in my institution with similar position level"],
            "dataSet": [
              {
                "name" : "All Museums",
                "data" : [43,25,1,7]
              },
              {
                "name" : "My Museum",
                "data" : [1,34,12,7]
              },
              {
                "name" : "Others in My Region",
                "data" : [1,87,32,7]
              },
              {
                "name" : "Other of Same Scale",
                "data" : [43,25,1,7]
              },
              {
                "name" : "Others of the Same Type",
                "data" : [1,87,32,7]
              },
              {
                "name" : "Others matching Collecting/Non-Collecting",
                "data" : [43,25,1,7]
              },
            ],
            "questionName": "Compared to people at similar position levels (e.g., entry level, associate, manager, executive) in my institution, I think my salary is:",
            "graphType": "column",
            "questionType": "radiogroup"
          },
          {
            "id": 14,
            "labels" : ["Above others","About the same as others","Below others"],
            "dataSet": [
              {
                "name" : "All Museums",
                "data" : [43,25,1]
              },
              {
                "name" : "My Museum",
                "data" : [1,34,12]
              },
              {
                "name" : "Others in My Region",
                "data" : [1,87,32]
              },
              {
                "name" : "Other of Same Scale",
                "data" : [43,25,1]
              },
              {
                "name" : "Others of the Same Type",
                "data" : [1,87,32]
              },
              {
                "name" : "Others matching Collecting/Non-Collecting",
                "data" : [43,25,1]
              },
            ],
            "questionName": "Compared to people at other art museums with comparable position levels (e.g., entry level, associate, manager, director, executive), I think my salary is:",
            "graphType": "column",
            "questionType": "radiogroup"
          },
          {
            "id": 15,
            "labels" : ["A simultaneous promotion with title change and a pay increase beyond cost of living","A promotion with title change but no accompanying pay increase beyond cost of living", "A pay increase beyond cost of living without a change in title","None of the above"],
            "dataSet": [
              {
                "name" : "All Museums",
                "data" : [43,25,1,4]
              },
              {
                "name" : "My Museum",
                "data" : [1,34,12,4]
              },
              {
                "name" : "Others in My Region",
                "data" : [1,87,32,4]
              },
              {
                "name" : "Other of Same Scale",
                "data" : [43,25,1,4]
              },
              {
                "name" : "Others of the Same Type",
                "data" : [1,87,32,4]
              },
              {
                "name" : "Others matching Collecting/Non-Collecting",
                "data" : [43,25,1,4]
              },
            ],
            "questionName": "Have you ever received any of the following combinations of promotions and pay increases while at your current museum? Select all that apply. (Please consider ONLY pay increases beyond cost of living or inflation adjustment - typically 2-3% per year).",
            "graphType": "column",
            "questionType": "radiogroup"
          },
          {
            "id": 16,
            "labels" : ["All", "Women", "Men", "Non-binary and Another Gender","Asian or Asian American","Middle Eastern or North African","Black or African American","Hispanic or Latina/o/x","Native American or Alaska Native","Native Hawaiian or Other Pacific Islander","White or European American","Multiracial","Other Race","Prefer Not To Answer"],
            "dataSet": [
              {
                "name" : "All Museums",
                "data" : [1,1.2,1.6,.7,.9,.1,.5,1.3,2,.1,.5,.6,.3,1]
              },
              {
                "name" : "My Museum",
                "data" : [1,1.2,1.6,.7,.9,.1,.5,1.3,2,.1,.5,.6,.3,1]
              },
              {
                "name" : "Others in My Region",
                "data" : [1,1.2,1.6,.7,.9,.1,.5,1.3,2,.1,.5,.6,.3,1]
              },
              {
                "name" : "Other of Same Scale",
                "data" : [1,1.2,1.6,.7,.9,.1,.5,1.3,2,.1,.5,.6,.3,1]
              },
              {
                "name" : "Others of the Same Type",
                "data" : [1,1.2,1.6,.7,.9,.1,.5,1.3,2,.1,.5,.6,.3,1]
              },
              {
                "name" : "Others matching Collecting/Non-Collecting",
                "data" : [1,1.2,1.6,.7,.9,.1,.5,1.3,2,.1,.5,.6,.3,1]
              },
            ],
            "questionName": "Promotion Rate",
            "graphType": "column",
            "questionType": "radiogroup"
          },
          {
            "id": 17,
            "labels" : ["All", "Women", "Men", "Non-binary and Another Gender","Asian or Asian American","Middle Eastern or North African","Black or African American","Hispanic or Latina/o/x","Native American or Alaska Native","Native Hawaiian or Other Pacific Islander","White or European American","Multiracial","Other Race","Prefer Not To Answer"],
            "dataSet": [
              {
                "name" : "All Museums",
                "data" : [1,1.2,1.6,.7,.9,.1,.5,1.3,2,.1,.5,.6,.3,1]
              },
              {
                "name" : "My Museum",
                "data" : [1,1.2,1.6,.7,.9,.1,.5,1.3,2,.1,.5,.6,.3,1]
              },
              {
                "name" : "Others in My Region",
                "data" : [1,1.2,1.6,.7,.9,.1,.5,1.3,2,.1,.5,.6,.3,1]
              },
              {
                "name" : "Other of Same Scale",
                "data" : [1,1.2,1.6,.7,.9,.1,.5,1.3,2,.1,.5,.6,.3,1]
              },
              {
                "name" : "Others of the Same Type",
                "data" : [1,1.2,1.6,.7,.9,.1,.5,1.3,2,.1,.5,.6,.3,1]
              },
              {
                "name" : "Others matching Collecting/Non-Collecting",
                "data" : [1,1.2,1.6,.7,.9,.1,.5,1.3,2,.1,.5,.6,.3,1]
              },
            ],
            "questionName": "Promotion rate title change no pay increase",
            "graphType": "column",
            "questionType": "radiogroup"
          },
          {
            "id": 18,
            "labels" : ["All", "Women", "Men", "Non-binary and Another Gender","Asian or Asian American","Middle Eastern or North African","Black or African American","Hispanic or Latina/o/x","Native American or Alaska Native","Native Hawaiian or Other Pacific Islander","White or European American","Multiracial","Other Race","Prefer Not To Answer"],
            "dataSet": [
              {
                "name" : "All Museums",
                "data" : [1,1.2,1.6,.7,.9,.1,.5,1.3,2,.1,.5,.6,.3,1]
              },
              {
                "name" : "My Museum",
                "data" : [1,1.2,1.6,.7,.9,.1,.5,1.3,2,.1,.5,.6,.3,1]
              },
              {
                "name" : "Others in My Region",
                "data" : [1,1.2,1.6,.7,.9,.1,.5,1.3,2,.1,.5,.6,.3,1]
              },
              {
                "name" : "Other of Same Scale",
                "data" : [1,1.2,1.6,.7,.9,.1,.5,1.3,2,.1,.5,.6,.3,1]
              },
              {
                "name" : "Others of the Same Type",
                "data" : [1,1.2,1.6,.7,.9,.1,.5,1.3,2,.1,.5,.6,.3,1]
              },
              {
                "name" : "Others matching Collecting/Non-Collecting",
                "data" : [1,1.2,1.6,.7,.9,.1,.5,1.3,2,.1,.5,.6,.3,1]
              },
            ],
            "questionName": "Promotion no title change yes pay increase",
            "graphType": "column",
            "questionType": "radiogroup"
          },
        ]
      },
      {
        section_title: "PART 3: Staff experiences",
        charts: [
          {
            "id": 19,
            "labels" : ["1-2","3","4-5"],
            "dataSet": [
              {
                "name" : "All Museums",
                "data" : [43,25,1,]
              },
              {
                "name" : "My Museum",
                "data" : [1,34,12,]
              },
              {
                "name" : "Others in My Region",
                "data" : [1,87,32,]
              },
              {
                "name" : "Other of Same Scale",
                "data" : [43,25,1,]
              },
              {
                "name" : "Others of the Same Type",
                "data" : [1,87,32,]
              },
              {
                "name" : "Others matching Collecting/Non-Collecting",
                "data" : [43,25,1,]
              },
            ],
            "questionName": "In your current employment situation, how satisfied are you with the level of pay.",
            "graphType": "column",
            "questionType": "radiogroup"
          },
          {
            "id": 20,
            "labels" : ["1-2","3","4-5"],
            "dataSet": [
              {
                "name" : "All Museums",
                "data" : [43,25,1]
              },
              {
                "name" : "My Museum",
                "data" : [1,34,12]
              },
              {
                "name" : "Others in My Region",
                "data" : [1,87,32]
              },
              {
                "name" : "Other of Same Scale",
                "data" : [43,25,1]
              },
              {
                "name" : "Others of the Same Type",
                "data" : [1,87,32]
              },
              {
                "name" : "Others matching Collecting/Non-Collecting",
                "data" : [43,25,1]
              },
            ],
            "questionName": "In your current employment situation, how satisfied are you with the stability and predictability of pay.",
            "graphType": "column",
            "questionType": "radiogroup"
          },
          {
            "id": 21,
            "labels" : ["1-2","3","4-5"],
            "dataSet": [
              {
                "name" : "All Museums",
                "data" : [43,25,1]
              },
              {
                "name" : "My Museum",
                "data" : [1,34,12]
              },
              {
                "name" : "Others in My Region",
                "data" : [1,87,32]
              },
              {
                "name" : "Other of Same Scale",
                "data" : [43,25,1]
              },
              {
                "name" : "Others of the Same Type",
                "data" : [1,87,32]
              },
              {
                "name" : "Others matching Collecting/Non-Collecting",
                "data" : [43,25,1]
              },
            ],
            "questionName": "In your current employment situation, how satisfied are you with the stability and predictability of hours.",
            "graphType": "column",
            "questionType": "radiogroup"
          },
          {
            "id": 22,
            "labels" : ["1-2","3","4-5"],
            "dataSet": [
              {
                "name" : "All Museums",
                "data" : [43,25,1]
              },
              {
                "name" : "My Museum",
                "data" : [1,34,12]
              },
              {
                "name" : "Others in My Region",
                "data" : [1,87,32]
              },
              {
                "name" : "Other of Same Scale",
                "data" : [43,25,1]
              },
              {
                "name" : "Others of the Same Type",
                "data" : [1,87,32]
              },
              {
                "name" : "Others matching Collecting/Non-Collecting",
                "data" : [43,25,1]
              },
            ],
            "questionName": "In your current employment situation, how satisfied are you with your control over hours and/or location (e.g., ability to work flexible hours, work remotely).",
            "graphType": "column",
            "questionType": "radiogroup"
          },
          {
            "id": 23,
            "labels" : ["1-2","3","4-5"],
            "dataSet": [
              {
                "name" : "All Museums",
                "data" : [43,25,1]
              },
              {
                "name" : "My Museum",
                "data" : [1,34,12]
              },
              {
                "name" : "Others in My Region",
                "data" : [1,87,32]
              },
              {
                "name" : "Other of Same Scale",
                "data" : [43,25,1]
              },
              {
                "name" : "Others of the Same Type",
                "data" : [1,87,32]
              },
              {
                "name" : "Others matching Collecting/Non-Collecting",
                "data" : [43,25,1]
              },
            ],
            "questionName": "In your current employment situation, how satisfied are you with the job security.",
            "graphType": "column",
            "questionType": "radiogroup"
          },
          {
            "id": 24,
            "labels" : ["1-2","3","4-5"],
            "dataSet": [
              {
                "name" : "All Museums",
                "data" : [43,25,1]
              },
              {
                "name" : "My Museum",
                "data" : [1,34,12]
              },
              {
                "name" : "Others in My Region",
                "data" : [1,87,32]
              },
              {
                "name" : "Other of Same Scale",
                "data" : [43,25,1]
              },
              {
                "name" : "Others of the Same Type",
                "data" : [1,87,32]
              },
              {
                "name" : "Others matching Collecting/Non-Collecting",
                "data" : [43,25,1]
              },
            ],
            "questionName": "In your current employment situation, how satisfied are you with the employee benefits (e.g., health care, retirement).",
            "graphType": "column",
            "questionType": "radiogroup"
          },
          {
            "id": 25,
            "labels" : ["1-2","3","4-5"],
            "dataSet": [
              {
                "name" : "All Museums",
                "data" : [43,25,1]
              },
              {
                "name" : "My Museum",
                "data" : [1,34,12]
              },
              {
                "name" : "Others in My Region",
                "data" : [1,87,32]
              },
              {
                "name" : "Other of Same Scale",
                "data" : [43,25,1]
              },
              {
                "name" : "Others of the Same Type",
                "data" : [1,87,32]
              },
              {
                "name" : "Others matching Collecting/Non-Collecting",
                "data" : [43,25,1]
              },
            ],
            "questionName": "In your current employment situation, how satisfied are you with the career advancement opportunities (e.g., promotion path, learning new skills).",
            "graphType": "column",
            "questionType": "radiogroup"
          },
          {
            "id": 26,
            "labels" : ["1-2","3","4-5"],
            "dataSet": [
              {
                "name" : "All Museums",
                "data" : [43,25,1]
              },
              {
                "name" : "My Museum",
                "data" : [1,34,12]
              },
              {
                "name" : "Others in My Region",
                "data" : [1,87,32]
              },
              {
                "name" : "Other of Same Scale",
                "data" : [43,25,1]
              },
              {
                "name" : "Others of the Same Type",
                "data" : [1,87,32]
              },
              {
                "name" : "Others matching Collecting/Non-Collecting",
                "data" : [43,25,1]
              },
            ],
            "questionName": "In your current employment situation, how satisfied are you with enjoying your day-to-day work (e.g., good coworkers/managers, pleasant work environment, manageable stress level).",
            "graphType": "column",
            "questionType": "radiogroup"
          },
          {
            "id": 27,
            "labels" : ["1-2","3","4-5"],
            "dataSet": [
              {
                "name" : "All Museums",
                "data" : [43,25,1]
              },
              {
                "name" : "My Museum",
                "data" : [1,34,12]
              },
              {
                "name" : "Others in My Region",
                "data" : [1,87,32]
              },
              {
                "name" : "Other of Same Scale",
                "data" : [43,25,1]
              },
              {
                "name" : "Others of the Same Type",
                "data" : [1,87,32]
              },
              {
                "name" : "Others matching Collecting/Non-Collecting",
                "data" : [43,25,1]
              },
            ],
            "questionName": "In your current employment situation, how satisfied are you with having a sense of purpose and dignity in your work.",
            "graphType": "column",
            "questionType": "radiogroup"
          },
          {
            "id": 28,
            "labels" : ["1-2","3","4-5"],
            "dataSet": [
              {
                "name" : "All Museums",
                "data" : [43,25,1]
              },
              {
                "name" : "My Museum",
                "data" : [1,34,12]
              },
              {
                "name" : "Others in My Region",
                "data" : [1,87,32]
              },
              {
                "name" : "Other of Same Scale",
                "data" : [43,25,1]
              },
              {
                "name" : "Others of the Same Type",
                "data" : [1,87,32]
              },
              {
                "name" : "Others matching Collecting/Non-Collecting",
                "data" : [43,25,1,4]
              },
            ],
            "questionName": "In your current employment situation, how satisfied are you with having the power to change things about your job that you’re not satisfied with.",
            "graphType": "column",
            "questionType": "radiogroup"
          },
          {
            "id": 29,
            "labels" : ["All", "Women", "Men", "Non-binary and Another Gender","Asian or Asian American","Middle Eastern or North African","Black or African American","Hispanic or Latina/o/x","Native American or Alaska Native","Native Hawaiian or Other Pacific Islander","White or European American","Multiracial","Other Race","Prefer Not To Answer"],
            "dataSet": [
              {
                "name" : "All Museums",
                "data" : [1,1.2,1.6,.7,.9,.1,.5,1.3,2,.1,.5,.6,.3,1]
              },
              {
                "name" : "My Museum",
                "data" : [1,1.2,1.6,.7,.9,.1,.5,1.3,2,.1,.5,.6,.3,1]
              },
              {
                "name" : "Others in My Region",
                "data" : [1,1.2,1.6,.7,.9,.1,.5,1.3,2,.1,.5,.6,.3,1]
              },
              {
                "name" : "Other of Same Scale",
                "data" : [1,1.2,1.6,.7,.9,.1,.5,1.3,2,.1,.5,.6,.3,1]
              },
              {
                "name" : "Others of the Same Type",
                "data" : [1,1.2,1.6,.7,.9,.1,.5,1.3,2,.1,.5,.6,.3,1]
              },
              {
                "name" : "Others matching Collecting/Non-Collecting",
                "data" : [1,1.2,1.6,.7,.9,.1,.5,1.3,2,.1,.5,.6,.3,1]
              },
            ],
            "questionName": "Institutional Satisfaction Mean",
            "graphType": "column",
            "questionType": "radiogroup"
          },
          {
            "id": 30,
            "labels" : [ "Content",  "Worried",  "Excited",  "Sad",  "Connected to others",  "Bored",  "Angry",  "Hopeful",  "Disappointed",  "Inspired",  "None of the above",],
            "dataSet": [
              {
                "name" : "All Museums",
                "data" : [1,1.2,1.6,.7,.9,.1,.5,1.3,2,.1,.5]
              },
              {
                "name" : "My Museum",
                "data" : [1,1.2,1.6,.7,.9,.1,.5,1.3,2,.1,.5]
              },
              {
                "name" : "Others in My Region",
                "data" : [1,1.2,1.6,.7,.9,.1,.5,1.3,2,.1,.5]
              },
              {
                "name" : "Other of Same Scale",
                "data" : [1,1.2,1.6,.7,.9,.1,.5,1.3,2,.1,.5]
              },
              {
                "name" : "Others of the Same Type",
                "data" : [1,1.2,1.6,.7,.9,.1,.5,1.3,2,.1,.5]
              },
              {
                "name" : "Others matching Collecting/Non-Collecting",
                "data" : [1,1.2,1.6,.7,.9,.1,.5,1.3,2,.1,.5]
              },
            ],
            "questionName": "Thinking about the past 12 months in your workplace (or your total tenure if less than 12 months), which of the following 3 emotions do you most associate with working at your museum? Select up to THREE.",
            "graphType": "column",
            "questionType": "radiogroup"
          },
          {
            "id": 31,
            "labels" : ["All: Yes","All: No","All: Prefer Not To Answer","Women", "Men", "Non-binary and Another Gender","Asian or Asian American","Middle Eastern or North African","Black or African American","Hispanic or Latina/o/x","Native American or Alaska Native","Native Hawaiian or Other Pacific Islander","White or European American","Multiracial","Other Race","Prefer Not To Answer"],
            "dataSet": [
              {
                "name" : "All Museums",
                "data" : [43,25,1,43,25,1,43,25,1,43,25,1,43,25,1,7]
              },
              {
                "name" : "My Museum",
                "data" : [43,25,1,43,25,1,43,25,1,43,25,1,43,25,1,7]
              },
              {
                "name" : "Others in My Region",
                "data" : [43,25,1,43,25,1,43,25,1,43,25,1,43,25,1,7]
              },
              {
                "name" : "Other of Same Scale",
                "data" : [43,25,1,43,25,1,43,25,1,43,25,1,43,25,1,7]
              },
              {
                "name" : "Others of the Same Type",
                "data" : [43,25,1,43,25,1,43,25,1,43,25,1,43,25,1,7]
              },
              {
                "name" : "Others matching Collecting/Non-Collecting",
                "data" : [43,25,1,43,25,1,43,25,1,43,25,1,43,25,1,7]
              },
            ],
            "questionName": "Have you felt discriminated against or harassed on the basis your gender, sexual orientation, racial or ethnic background, social or economic status, religion, age, or disability while working in your current museum workplace?",
            "graphType": "column",
            "questionType": "radiogroup"
          },
          {
            "id": 32,
            "labels" : ["Very frequently (e.g., daily or almost daily)","Often (e.g., a few times a month)","Sometimes (e.g., a few times a year) ","Rarely (e.g., one or two times total)"],
            "dataSet": [
              {
                "name" : "All Museums",
                "data" : [43,25,1,4]
              },
              {
                "name" : "My Museum",
                "data" : [1,34,12,4]
              },
              {
                "name" : "Others in My Region",
                "data" : [1,87,32,4]
              },
              {
                "name" : "Other of Same Scale",
                "data" : [43,25,1,4]
              },
              {
                "name" : "Others of the Same Type",
                "data" : [1,87,32,4]
              },
              {
                "name" : "Others matching Collecting/Non-Collecting",
                "data" : [43,25,1,4]
              },
            ],
            "questionName": "How often have you felt discriminated against?",
            "graphType": "column",
            "questionType": "radiogroup"
          },
          {
            "id": 33,
            "labels" : ["Discrimination and/or harassment based on gender (including pregnancy, gender expression, gender identity, etc.)","Discrimination and/or harassment based on sexual orientation","Discrimination and/or harassment based on race and/or ethnicity","Discrimination and/or harassment based on social or economic status","Discrimination and/or harassment based on religion","Discrimination and/or harassment based on age","Discrimination and/or harassment based on disability","Another form of discrimination and/or harassment","I don’t know ",],
            "dataSet": [
              {
                "name" : "All Museums",
                "data" : [43,25,1,4,4,43,25,1,4]
              },
              {
                "name" : "My Museum",
                "data" : [43,25,1,4,4,43,25,1,4]
              },
              {
                "name" : "Others in My Region",
                "data" : [43,25,1,4,4,43,25,1,4]
              },
              {
                "name" : "Other of Same Scale",
                "data" : [43,25,1,4,4,43,25,1,4]
              },
              {
                "name" : "Others of the Same Type",
                "data" : [43,25,1,4,4,43,25,1,4]
              },
              {
                "name" : "Others matching Collecting/Non-Collecting",
                "data" : [43,25,1,4,4,43,25,1,4]
              },
            ],
            "questionName": "Which of the following forms of discrimination and/or harassment, have you experienced in your current museum workplace? Please select all that apply.",
            "graphType": "column",
            "questionType": "radiogroup"
          },
          {
            "id": 34,
            "labels" : ["I filed an HR complaint form (i.e., in-person or online)","I talked to an HR staff member who is available to employees","I used an anonymous reporting mechanism","I used an employee complaint hotline","I talked to a neutral employee or manager who can communicate the issues to HR","I used a third-party reporting process (e.g., use of an ombudsman)","I used another reporting mechanism","I followed a union-provided grievance process for reporting","I did something else","I haven’t done anything in response",],
            "dataSet": [
              {
                "name" : "All Museums",
                "data" : [43,25,1,4,4,43,25,1,4,11]
              },
              {
                "name" : "My Museum",
                "data" : [43,25,1,4,4,43,25,1,4,11]
              },
              {
                "name" : "Others in My Region",
                "data" : [43,25,1,4,4,43,25,1,4,11]
              },
              {
                "name" : "Other of Same Scale",
                "data" : [43,25,1,4,4,43,25,1,4,11]
              },
              {
                "name" : "Others of the Same Type",
                "data" : [43,25,1,4,4,43,25,1,4,11]
              },
              {
                "name" : "Others matching Collecting/Non-Collecting",
                "data" : [43,25,1,4,4,43,25,1,4,11]
              },
            ],
            "questionName": "Have you taken any of the following actions in response to discrimination and/or harassment in your current museum workplace? Please select ALL that apply.",
            "graphType": "column",
            "questionType": "radiogroup"
          },
          {
            "id": 35,
            "labels" : ["Not at all satisfied","Somewhat satisfied","Very satisfied"],
            "dataSet": [
              {
                "name" : "All Museums",
                "data" : [43,25,1]
              },
              {
                "name" : "My Museum",
                "data" : [43,25,1]
              },
              {
                "name" : "Others in My Region",
                "data" : [43,25,1]
              },
              {
                "name" : "Other of Same Scale",
                "data" : [43,25,1]
              },
              {
                "name" : "Others of the Same Type",
                "data" : [43,25,1]
              },
              {
                "name" : "Others matching Collecting/Non-Collecting",
                "data" : [43,25,1]
              },
            ],
            "questionName": "How satisfied are you with how HR and /or the museum resolved your complaint(s) overall?",
            "graphType": "column",
            "questionType": "radiogroup"
          },
          {
            "id": 36,
            "labels" : ["I worried about retaliation from people in leadership at the institution","I worried about retaliation from the person who discriminated against/harassed me","I didn’t think anything would be done about it","I didn’t think anything could be done about it because the person who discriminated against/harassed me is not an employee of the museum (e.g., visitor, board member, artist...)","I didn’t know about what actions I could take","My workplace doesn’t provide any mechanisms to report discrimination and/or harassment","I always reported my experiences of discrimination and harassment","I haven't experienced discrimination or harassment"],
            "dataSet": [
              {
                "name" : "All Museums",
                "data" : [43,25,1,7,5,4,6,2]
              },
              {
                "name" : "My Museum",
                "data" : [43,25,1,7,5,4,6,2]
              },
              {
                "name" : "Others in My Region",
                "data" : [43,25,1,7,5,4,6,2]
              },
              {
                "name" : "Other of Same Scale",
                "data" : [43,25,1,7,5,4,6,2]
              },
              {
                "name" : "Others of the Same Type",
                "data" : [43,25,1,7,5,4,6,2]
              },
              {
                "name" : "Others matching Collecting/Non-Collecting",
                "data" : [43,25,1,7,5,4,6,2]
              },
            ],
            "questionName": "If you have experienced any discrimination or harassment and decided NOT to take action in response, what were your reasons? Select all that apply.",
            "graphType": "column",
            "questionType": "radiogroup"
          },
          {
            "id": 37,
            "labels" : ["Yes","No"],
            "dataSet": [
              {
                "name" : "All Museums",
                "data" : [43,25]
              },
              {
                "name" : "My Museum",
                "data" : [43,25]
              },
              {
                "name" : "Others in My Region",
                "data" : [43,25]
              },
              {
                "name" : "Other of Same Scale",
                "data" : [43,25]
              },
              {
                "name" : "Others of the Same Type",
                "data" : [43,25]
              },
              {
                "name" : "Others matching Collecting/Non-Collecting",
                "data" : [43,25]
              },
            ],
            "questionName": "Have you ever considered leaving your current museum workplace for another art museum?",
            "graphType": "column",
            "questionType": "radiogroup"
          },
          {
            "id": 38,
            "labels" : ["Pay is too low","Other institutions have more flexible work hours","No full-time work is available in this institution","Opportunities for growth at the other museum","Experiences of discrimination or harassment","Lack of opportunities for growth at my museum","Unsafe working conditions","Positive reputation of the other museum","Burnout","Desire to live in a different town or city","Interpersonal issues with other staff members","Poor management","I don’t believe my institution can change for the better","Personal reasons unrelated to my current museum workplace","None of the above",],
            "dataSet": [
              {
                "name" : "All Museums",
                "data" : [43,25,1,2,3,4,5,6,7,8,9,1,2,3,4]
              },
              {
                "name" : "My Museum",
                "data" : [43,25,1,2,3,4,5,6,7,8,9,1,2,3,4]
              },
              {
                "name" : "Others in My Region",
                "data" : [43,25,1,2,3,4,5,6,7,8,9,1,2,3,4]
              },
              {
                "name" : "Other of Same Scale",
                "data" : [43,25,1,2,3,4,5,6,7,8,9,1,2,3,4]
              },
              {
                "name" : "Others of the Same Type",
                "data" : [43,25,1,2,3,4,5,6,7,8,9,1,2,3,4]
              },
              {
                "name" : "Others matching Collecting/Non-Collecting",
                "data" : [43,25,1,2,3,4,5,6,7,8,9,1,2,3,4]
              },
            ],
            "questionName": "Have you ever considered leaving your current museum workplace for another art museum?",
            "graphType": "bar",
            "questionType": "radiogroup"
          },
          {
            "id": 39,
            "labels" : ["Yes","No"],
            "dataSet": [
              {
                "name" : "All Museums",
                "data" : [43,25]
              },
              {
                "name" : "My Museum",
                "data" : [43,25]
              },
              {
                "name" : "Others in My Region",
                "data" : [43,25]
              },
              {
                "name" : "Other of Same Scale",
                "data" : [43,25]
              },
              {
                "name" : "Others of the Same Type",
                "data" : [43,25]
              },
              {
                "name" : "Others matching Collecting/Non-Collecting",
                "data" : [43,25]
              },
            ],
            "questionName": "Have you ever considered leaving the art museum field?",
            "graphType": "column",
            "questionType": "radiogroup"
          },
          {
            "id": 40,
            "labels" : ["Pay is too low in art museums","Other fields have more flexible work hours","More interested in other fields","Full-time work is unavailable to me in most art museums","Experiences of discrimination or harassment in art museums","Lack of opportunities for growth in art museums","Unsafe working conditions in art museums","Burnout in the art museum field","Exciting opportunities in other fields","Interpersonal issues with other staff members are common in art museums","Poor management in art museums","I don’t believe art museums can change for the better","Personal reasons unrelated to art and/or museums","None of the above",],
            "dataSet": [
              {
                "name" : "All Museums",
                "data" : [43,25,1,2,3,4,5,6,7,8,9,1,2,3]
              },
              {
                "name" : "My Museum",
                "data" : [43,25,1,2,3,4,5,6,7,8,9,1,2,3]
              },
              {
                "name" : "Others in My Region",
                "data" : [43,25,1,2,3,4,5,6,7,8,9,1,2,3]
              },
              {
                "name" : "Other of Same Scale",
                "data" : [43,25,1,2,3,4,5,6,7,8,9,1,2,3]
              },
              {
                "name" : "Others of the Same Type",
                "data" : [43,25,1,2,3,4,5,6,7,8,9,1,2,3]
              },
              {
                "name" : "Others matching Collecting/Non-Collecting",
                "data" : [43,25,1,2,3,4,5,6,7,8,9,1,2,3]
              },
            ],
            "questionName": "Which of the following reasons made you consider leaving the art museum field? Select all that apply.",
            "graphType": "bar",
            "questionType": "radiogroup"
          },
          {
            "id": 41,
            "labels" : ["I personally incorporate principles of diversity, equity, and inclusion in my overall work","I am currently a member of a diversity, equity, and inclusion committee at work","I was previously a member of a diversity, equity, and inclusion committee at work","My position specifically focuses on diversity, equity, and inclusion","None of the above – I am not involved in my museum’s diversity, equity, and inclusion efforts","None of the above – I am not clear about how to get involved in my museum’s diversity, equity, and inclusion efforts","Not applicable – my museum does not have any efforts towards diversity, equity, and inclusion"],
            "dataSet": [
              {
                "name" : "All Museums",
                "data" : [43,25,1,2,3,4,5]
              },
              {
                "name" : "My Museum",
                "data" : [43,25,1,2,3,4,5]
              },
              {
                "name" : "Others in My Region",
                "data" : [43,25,1,2,3,4,5]
              },
              {
                "name" : "Other of Same Scale",
                "data" : [43,25,1,2,3,4,5]
              },
              {
                "name" : "Others of the Same Type",
                "data" : [43,25,1,2,3,4,5]
              },
              {
                "name" : "Others matching Collecting/Non-Collecting",
                "data" : [43,25,1,2,3,4,5]
              },
            ],
            "questionName": "What kind of role, if any, do you have in your museum’s diversity, equity, and inclusion efforts? Select all that apply.",
            "graphType": "column",
            "questionType": "radiogroup"
          },
        ]
      },
      {
        section_title: "PART 4: Workplace climate & Organizational characteristics",
        charts: [
          {
            "id": 42,
            "labels" : ["Artists in the collection","Board and/or trustee members","Staff members","Volunteers","None of the above","I don’t know"],
            "dataSet": [
              {
                "name" : "All Museums",
                "data" : [43,25,1,2,3,4]
              },
              {
                "name" : "My Museum",
                "data" : [43,25,1,2,3,4]
              },
              {
                "name" : "Others in My Region",
                "data" : [43,25,1,2,3,4]
              },
              {
                "name" : "Other of Same Scale",
                "data" : [43,25,1,2,3,4]
              },
              {
                "name" : "Others of the Same Type",
                "data" : [43,25,1,2,3,4]
              },
              {
                "name" : "Others matching Collecting/Non-Collecting",
                "data" : [43,25,1,2,3,4]
              },
            ],
            "questionName": "Has your museum measured the composition of any of the following groups?",
            "graphType": "column",
            "questionType": "radiogroup"
          },
          {
            "id": 43,
            "labels" : ["Yes, I am a union member for my museum job","No, I have the option to be a union member for my museum job but have not chosen to join","No, a union is not available for my museum job"],
            "dataSet": [
              {
                "name" : "All Museums",
                "data" : [43,25,1]
              },
              {
                "name" : "My Museum",
                "data" : [43,25,1]
              },
              {
                "name" : "Others in My Region",
                "data" : [43,25,1]
              },
              {
                "name" : "Other of Same Scale",
                "data" : [43,25,1]
              },
              {
                "name" : "Others of the Same Type",
                "data" : [43,25,1]
              },
              {
                "name" : "Others matching Collecting/Non-Collecting",
                "data" : [43,25,1]
              },
            ],
            "questionName": "Are you a member, or do you have the option of being a member, of a union as part of your museum job?",
            "graphType": "column",
            "questionType": "radiogroup"
          },
          {
            "id": 44,
            "labels" : ["I am/will be working in-person only","I am/will be working in a hybrid setup where the museum chooses how many and which days to work from home and which days to work from the museum","I am/will be working in a hybrid setup where I get to choose how many and which days to work from home and which days to work in the museum","I am/will be working in a hybrid setup where the museum chooses how many days to work from home and how many days to work from the museum and I get to choose which days","I am/will be working from home only","I don’t know much about the museum’s return-to-work plans"],
            "dataSet": [
              {
                "name" : "All Museums",
                "data" : [43,25,1,43,25,1]
              },
              {
                "name" : "My Museum",
                "data" : [43,25,1,43,25,1]
              },
              {
                "name" : "Others in My Region",
                "data" : [43,25,1,43,25,1]
              },
              {
                "name" : "Other of Same Scale",
                "data" : [43,25,1,43,25,1]
              },
              {
                "name" : "Others of the Same Type",
                "data" : [43,25,1,43,25,1]
              },
              {
                "name" : "Others matching Collecting/Non-Collecting",
                "data" : [43,25,1,43,25,1]
              },
            ],
            "questionName": "Which of the following statements best represent your museum’s post-COVID return-to- work policy, as it applies to you? Select all that apply.",
            "graphType": "column",
            "questionType": "radiogroup"
          },
          {
            "id": 45,
            "labels" : ["My workplace shares the specific salaries of all employees publicly","My union handbook lists salary levels for each job","My workplace shares salary ranges for all positions or levels with employees","My workplace posts salary ranges for each open position","My workplace actively discourages employees from discussing their salaries","None of the above ","I don’t know"],
            "dataSet": [
              {
                "name" : "All Museums",
                "data" : [43,25,1,43,25,1,7]
              },
              {
                "name" : "My Museum",
                "data" : [43,25,1,43,25,1,7]
              },
              {
                "name" : "Others in My Region",
                "data" : [43,25,1,43,25,1,7]
              },
              {
                "name" : "Other of Same Scale",
                "data" : [43,25,1,43,25,1,7]
              },
              {
                "name" : "Others of the Same Type",
                "data" : [43,25,1,43,25,1,7]
              },
              {
                "name" : "Others matching Collecting/Non-Collecting",
                "data" : [43,25,1,43,25,1,7]
              },
            ],
            "questionName": "Which of the following statements best reflect the salary sharing practices of your museum workplace? Select all that apply",
            "graphType": "column",
            "questionType": "radiogroup"
          },
          {
            "id": 46,
            "labels" : ["Strongly Disagree","Somewhat Disagree","Neutral","Somewhat Agree","Strongly Agree","Prefer not to answer",],
            "dataSet": [
              {
                "name" : "All Museums",
                "data" : [43,25,1,43,25,1]
              },
              {
                "name" : "My Museum",
                "data" : [1,34,12,43,25,1]
              },
              {
                "name" : "Others in My Region",
                "data" : [1,87,32,43,25,1]
              },
              {
                "name" : "Other of Same Scale",
                "data" : [43,25,1,43,25,1]
              },
              {
                "name" : "Others of the Same Type",
                "data" : [1,87,32,43,25,1]
              },
              {
                "name" : "Others matching Collecting/Non-Collecting",
                "data" : [43,25,1,43,25,1]
              },
            ],
            "questionName": "Please rate how much you agree or disagree with the following statements in relation to the culture of your current museum workplace: I believe that I can learn and grow in this organization",
            "graphType": "column",
            "questionType": "radiogroup"
          },
          {
            "id": 47,
            "labels" : ["Strongly Disagree","Somewhat Disagree","Neutral","Somewhat Agree","Strongly Agree","Prefer not to answer",],
            "dataSet": [
              {
                "name" : "All Museums",
                "data" : [43,25,1,43,25,1]
              },
              {
                "name" : "My Museum",
                "data" : [1,34,12,43,25,1]
              },
              {
                "name" : "Others in My Region",
                "data" : [1,87,32,43,25,1]
              },
              {
                "name" : "Other of Same Scale",
                "data" : [43,25,1,43,25,1]
              },
              {
                "name" : "Others of the Same Type",
                "data" : [1,87,32,43,25,1]
              },
              {
                "name" : "Others matching Collecting/Non-Collecting",
                "data" : [43,25,1,43,25,1]
              },
            ],
            "questionName": "Please rate how much you agree or disagree with the following statements in relation to the culture of your current museum workplace: I feel burned out in this organization",
            "graphType": "column",
            "questionType": "radiogroup"
          },
          {
            "id": 48,
            "labels" : ["Strongly Disagree","Somewhat Disagree","Neutral","Somewhat Agree","Strongly Agree","Prefer not to answer",],
            "dataSet": [
              {
                "name" : "All Museums",
                "data" : [43,25,1,43,25,1]
              },
              {
                "name" : "My Museum",
                "data" : [1,34,12,43,25,1]
              },
              {
                "name" : "Others in My Region",
                "data" : [1,87,32,43,25,1]
              },
              {
                "name" : "Other of Same Scale",
                "data" : [43,25,1,43,25,1]
              },
              {
                "name" : "Others of the Same Type",
                "data" : [1,87,32,43,25,1]
              },
              {
                "name" : "Others matching Collecting/Non-Collecting",
                "data" : [43,25,1,43,25,1]
              },
            ],
            "questionName": "Please rate how much you agree or disagree with the following statements in relation to the culture of your current museum workplace: My manager supports me",
            "graphType": "column",
            "questionType": "radiogroup"
          },
          {
            "id": 49,
            "labels" : ["Strongly Disagree","Somewhat Disagree","Neutral","Somewhat Agree","Strongly Agree","Prefer not to answer",],
            "dataSet": [
              {
                "name" : "All Museums",
                "data" : [43,25,1,43,25,1]
              },
              {
                "name" : "My Museum",
                "data" : [1,34,12,43,25,1]
              },
              {
                "name" : "Others in My Region",
                "data" : [1,87,32,43,25,1]
              },
              {
                "name" : "Other of Same Scale",
                "data" : [43,25,1,43,25,1]
              },
              {
                "name" : "Others of the Same Type",
                "data" : [1,87,32,43,25,1]
              },
              {
                "name" : "Others matching Collecting/Non-Collecting",
                "data" : [43,25,1,43,25,1]
              },
            ],
            "questionName": "Please rate how much you agree or disagree with the following statements in relation to the culture of your current museum workplace: I believe performance reviews contribute to growth and/or advancement in my institution",
            "graphType": "column",
            "questionType": "radiogroup"
          },
          {
            "id": 50,
            "labels" : ["Strongly Disagree","Somewhat Disagree","Neutral","Somewhat Agree","Strongly Agree","Prefer not to answer",],
            "dataSet": [
              {
                "name" : "All Museums",
                "data" : [43,25,1,43,25,1]
              },
              {
                "name" : "My Museum",
                "data" : [1,34,12,43,25,1]
              },
              {
                "name" : "Others in My Region",
                "data" : [1,87,32,43,25,1]
              },
              {
                "name" : "Other of Same Scale",
                "data" : [43,25,1,43,25,1]
              },
              {
                "name" : "Others of the Same Type",
                "data" : [1,87,32,43,25,1]
              },
              {
                "name" : "Others matching Collecting/Non-Collecting",
                "data" : [43,25,1,43,25,1]
              },
            ],
            "questionName": "Please rate how much you agree or disagree with the following statements in relation to the culture of your current museum workplace: Diversity and difference are not celebrated in this organization",
            "graphType": "column",
            "questionType": "radiogroup"
          },
          {
            "id": 51,
            "labels" : ["Strongly Disagree","Somewhat Disagree","Neutral","Somewhat Agree","Strongly Agree","Prefer not to answer",],
            "dataSet": [
              {
                "name" : "All Museums",
                "data" : [43,25,1,43,25,1]
              },
              {
                "name" : "My Museum",
                "data" : [1,34,12,43,25,1]
              },
              {
                "name" : "Others in My Region",
                "data" : [1,87,32,43,25,1]
              },
              {
                "name" : "Other of Same Scale",
                "data" : [43,25,1,43,25,1]
              },
              {
                "name" : "Others of the Same Type",
                "data" : [1,87,32,43,25,1]
              },
              {
                "name" : "Others matching Collecting/Non-Collecting",
                "data" : [43,25,1,43,25,1]
              },
            ],
            "questionName": "Please rate how much you agree or disagree with the following statements in relation to the culture of your current museum workplace: I believe that what I do here is meaningful",
            "graphType": "column",
            "questionType": "radiogroup"
          },
          {
            "id": 52,
            "labels" : ["Strongly Disagree","Somewhat Disagree","Neutral","Somewhat Agree","Strongly Agree","Prefer not to answer",],
            "dataSet": [
              {
                "name" : "All Museums",
                "data" : [43,25,1,43,25,1]
              },
              {
                "name" : "My Museum",
                "data" : [1,34,12,43,25,1]
              },
              {
                "name" : "Others in My Region",
                "data" : [1,87,32,43,25,1]
              },
              {
                "name" : "Other of Same Scale",
                "data" : [43,25,1,43,25,1]
              },
              {
                "name" : "Others of the Same Type",
                "data" : [1,87,32,43,25,1]
              },
              {
                "name" : "Others matching Collecting/Non-Collecting",
                "data" : [43,25,1,43,25,1]
              },
            ],
            "questionName": "Please rate how much you agree or disagree with the following statements in relation to the culture of your current museum workplace: The culture of my workplace negatively affects my mental and/or physical health",
            "graphType": "column",
            "questionType": "radiogroup"
          },
          {
            "id": 53,
            "labels" : ["Strongly Disagree","Somewhat Disagree","Neutral","Somewhat Agree","Strongly Agree","Prefer not to answer",],
            "dataSet": [
              {
                "name" : "All Museums",
                "data" : [43,25,1,43,25,1]
              },
              {
                "name" : "My Museum",
                "data" : [1,34,12,43,25,1]
              },
              {
                "name" : "Others in My Region",
                "data" : [1,87,32,43,25,1]
              },
              {
                "name" : "Other of Same Scale",
                "data" : [43,25,1,43,25,1]
              },
              {
                "name" : "Others of the Same Type",
                "data" : [1,87,32,43,25,1]
              },
              {
                "name" : "Others matching Collecting/Non-Collecting",
                "data" : [43,25,1,43,25,1]
              },
            ],
            "questionName": "Please rate how much you agree or disagree with the following statements in relation to the culture of your current museum workplace: Mistakes are held against you in this organization",
            "graphType": "column",
            "questionType": "radiogroup"
          },
          {
            "id": 54,
            "labels" : ["Strongly Disagree","Somewhat Disagree","Neutral","Somewhat Agree","Strongly Agree","Prefer not to answer",],
            "dataSet": [
              {
                "name" : "All Museums",
                "data" : [43,25,1,43,25,1]
              },
              {
                "name" : "My Museum",
                "data" : [1,34,12,43,25,1]
              },
              {
                "name" : "Others in My Region",
                "data" : [1,87,32,43,25,1]
              },
              {
                "name" : "Other of Same Scale",
                "data" : [43,25,1,43,25,1]
              },
              {
                "name" : "Others of the Same Type",
                "data" : [1,87,32,43,25,1]
              },
              {
                "name" : "Others matching Collecting/Non-Collecting",
                "data" : [43,25,1,43,25,1]
              },
            ],
            "questionName": "Please rate how much you agree or disagree with the following statements in relation to the culture of your current museum workplace: I would recommend this workplace to friends and family",
            "graphType": "column",
            "questionType": "radiogroup"
          },
          {
            "id": 55,
            "labels" : ["Strongly Disagree","Somewhat Disagree","Neutral","Somewhat Agree","Strongly Agree","Prefer not to answer",],
            "dataSet": [
              {
                "name" : "All Museums",
                "data" : [43,25,1,43,25,1]
              },
              {
                "name" : "My Museum",
                "data" : [1,34,12,43,25,1]
              },
              {
                "name" : "Others in My Region",
                "data" : [1,87,32,43,25,1]
              },
              {
                "name" : "Other of Same Scale",
                "data" : [43,25,1,43,25,1]
              },
              {
                "name" : "Others of the Same Type",
                "data" : [1,87,32,43,25,1]
              },
              {
                "name" : "Others matching Collecting/Non-Collecting",
                "data" : [43,25,1,43,25,1]
              },
            ],
            "questionName": "Please rate how much you agree or disagree with the following statements in relation to the culture of your current museum workplace: I don’t feel that I have a voice in decision making in this organization",
            "graphType": "column",
            "questionType": "radiogroup"
          },
          {
            "id": 56,
            "labels" : ["Strongly Disagree","Somewhat Disagree","Neutral","Somewhat Agree","Strongly Agree","Prefer not to answer",],
            "dataSet": [
              {
                "name" : "All Museums",
                "data" : [43,25,1,43,25,1]
              },
              {
                "name" : "My Museum",
                "data" : [1,34,12,43,25,1]
              },
              {
                "name" : "Others in My Region",
                "data" : [1,87,32,43,25,1]
              },
              {
                "name" : "Other of Same Scale",
                "data" : [43,25,1,43,25,1]
              },
              {
                "name" : "Others of the Same Type",
                "data" : [1,87,32,43,25,1]
              },
              {
                "name" : "Others matching Collecting/Non-Collecting",
                "data" : [43,25,1,43,25,1]
              },
            ],
            "questionName": "Please rate how much you agree or disagree with the following statements in relation to the culture of your current museum workplace: My institution provides management and/or leadership training for all supervisors",
            "graphType": "column",
            "questionType": "radiogroup"
          },
          {
            "id": 57,
            "labels" : ["Strongly Disagree","Somewhat Disagree","Neutral","Somewhat Agree","Strongly Agree","Prefer not to answer",],
            "dataSet": [
              {
                "name" : "All Museums",
                "data" : [43,25,1,43,25,1]
              },
              {
                "name" : "My Museum",
                "data" : [1,34,12,43,25,1]
              },
              {
                "name" : "Others in My Region",
                "data" : [1,87,32,43,25,1]
              },
              {
                "name" : "Other of Same Scale",
                "data" : [43,25,1,43,25,1]
              },
              {
                "name" : "Others of the Same Type",
                "data" : [1,87,32,43,25,1]
              },
              {
                "name" : "Others matching Collecting/Non-Collecting",
                "data" : [43,25,1,43,25,1]
              },
            ],
            "questionName": "Please rate how much you agree or disagree with the following statements in relation to the culture of your current museum workplace: People in my organization are held accountable for discrimination and harassment",
            "graphType": "column",
            "questionType": "radiogroup"
          },
          {
            "id": 58,
            "labels" : ["Strongly Disagree","Somewhat Disagree","Neutral","Somewhat Agree","Strongly Agree","Prefer not to answer",],
            "dataSet": [
              {
                "name" : "All Museums",
                "data" : [43,25,1,43,25,1]
              },
              {
                "name" : "My Museum",
                "data" : [1,34,12,43,25,1]
              },
              {
                "name" : "Others in My Region",
                "data" : [1,87,32,43,25,1]
              },
              {
                "name" : "Other of Same Scale",
                "data" : [43,25,1,43,25,1]
              },
              {
                "name" : "Others of the Same Type",
                "data" : [1,87,32,43,25,1]
              },
              {
                "name" : "Others matching Collecting/Non-Collecting",
                "data" : [43,25,1,43,25,1]
              },
            ],
            "questionName": "Please rate how much you agree or disagree with the following statements in relation to the culture of your current museum workplace: I feel like I have to hide some of who I am working in this organization",
            "graphType": "column",
            "questionType": "radiogroup"
          },
          {
            "id": 59,
            "labels" : ["All", "Women", "Men", "Non-binary and Another Gender","Asian or Asian American","Middle Eastern or North African","Black or African American","Hispanic or Latina/o/x","Native American or Alaska Native","Native Hawaiian or Other Pacific Islander","White or European American","Multiracial","Other Race","Prefer Not To Answer"],
            "dataSet": [
              {
                "name" : "All Museums",
                "data" : [1,1.2,1.6,.7,.9,.1,.5,1.3,2,.1,.5,.6,.3,1]
              },
              {
                "name" : "My Museum",
                "data" : [1,1.2,1.6,.7,.9,.1,.5,1.3,2,.1,.5,.6,.3,1]
              },
              {
                "name" : "Others in My Region",
                "data" : [1,1.2,1.6,.7,.9,.1,.5,1.3,2,.1,.5,.6,.3,1]
              },
              {
                "name" : "Other of Same Scale",
                "data" : [1,1.2,1.6,.7,.9,.1,.5,1.3,2,.1,.5,.6,.3,1]
              },
              {
                "name" : "Others of the Same Type",
                "data" : [1,1.2,1.6,.7,.9,.1,.5,1.3,2,.1,.5,.6,.3,1]
              },
              {
                "name" : "Others matching Collecting/Non-Collecting",
                "data" : [1,1.2,1.6,.7,.9,.1,.5,1.3,2,.1,.5,.6,.3,1]
              },
            ],
            "questionName": "Combined Culture Score",
            "graphType": "column",
            "questionType": "radiogroup"
          },
          {
            "id": 58,
            "labels" : ["The museum’s mission, vision, and/or values","The museum board’s priorities","Input from museum staff members","The interests of current museum visitors","The interests of the communities around the museum","None of the above/ I don't know"],
            "dataSet": [
              {
                "name" : "All Museums",
                "data" : [43,25,1,43,25,1]
              },
              {
                "name" : "My Museum",
                "data" : [1,34,12,43,25,1]
              },
              {
                "name" : "Others in My Region",
                "data" : [1,87,32,43,25,1]
              },
              {
                "name" : "Other of Same Scale",
                "data" : [43,25,1,43,25,1]
              },
              {
                "name" : "Others of the Same Type",
                "data" : [1,87,32,43,25,1]
              },
              {
                "name" : "Others matching Collecting/Non-Collecting",
                "data" : [43,25,1,43,25,1]
              },
            ],
            "questionName": "What/Who do you believe has a large impact on your museum leadership’s decisions? Please select all that apply.  ",
            "graphType": "column",
            "questionType": "radiogroup"
          },
        ]
      }
    ]