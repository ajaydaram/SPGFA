import "survey-core/defaultV2.css"
import { Model } from "survey-core";
import { Survey } from "survey-react-ui";
import './App.css';
import "./index.css"

const json ={

    "title": "SPIRITUAL GIFT ASSESSMENT QUESTIONNAIRE",
    "description": "For each statement, circle the score that reflects the extent of its truth in your life. 3 for MUCH, 2 for SOME, 1 for LITTLE and 0 for NOT AT ALL",
    "logoPosition": "right",
    "pages": [
    {
        "name": "page1",
        "elements": [
            {
                "type": "rating",
                "name": "1",
                "title": "I have a desire to speak direct messages from God that edifies, exhorts or comforts others.",
                "isRequired": true,
                "rateCount": 4,
                "rateMin": 0,
                "rateMax": 3
            },
            {
                "type": "rating",
                "name": "2",
                "title": "I have enjoyed relating to a certain group of people over a long period of time, sharing personally in their successes and failures.",
                "isRequired": true,
                "rateCount": 4,
                "rateMin": 0,
                "rateMax": 3
            },
            {
                "type": "rating",
                "name": "3",
                "title": "People have told me that I have helped them learn biblical truth in meaningful ways.",
                "isRequired": true,
                "rateCount": 4,
                "rateMin": 0,
                "rateMax": 3
            },
            {
                "type": "rating",
                "name": "4",
                "title": "I have applied spiritual truth effectively to situations in my own life.",
                "isRequired": true,
                "rateCount": 4,
                "rateMin": 0,
                "rateMax": 3
            },
            {
                "type": "rating",
                "name": "5",
                "title": "Others have told me I have helped them distinguish key and important facts of Scripture.",
                "isRequired": true,
                "rateCount": 4,
                "rateMin": 0,
                "rateMax": 3
            },
            {
                "type": "rating",
                "name": "6",
                "title": "I enjoyed challenging people's perspective of God by using various forms of art.",
                "isRequired": true,
                "rateCount": 4,
                "rateMin": 0,
                "rateMax": 3
            },
            {
                "type": "rating",
                "name": "7",
                "title": "Others in the church have noted that I have been able to see through phoniness before it was evident to other people.",
                "isRequired": true,
                "rateCount": 4,
                "rateMin": 0,
                "rateMax": 3
            },
            {
                "type": "rating",
                "name": "8",
                "title": "I find I manage money well in order to give liberally to the Lord's work.",
                "isRequired": true,
                "rateCount": 4,
                "rateMin": 0,
                "rateMax": 3
            },
            {
                "type": "rating",
                "name": "9",
                "title": "I have assisted Christian leaders to relieve them for their essential job.",
                "isRequired": true,
                "rateCount": 4,
                "rateMin": 0,
                "rateMax": 3
            },
            {
                "type": "rating",
                "name": "10",
                "title": "I have a desire to work with those who have physical or mental problems, to alleviate their suffering.",
                "isRequired": true,
                "rateCount": 4,
                "rateMin": 0,
                "rateMax": 3
            },
            {
                "type": "rating",
                "name": "11",
                "title": "I like to start churches in places where they do not presently exist.",
                "isRequired": true,
                "rateCount": 4,
                "rateMin": 0,
                "rateMax": 3
            }
        ]
    },
    {
        "name": "page2",
        "elements": [
            {
                "type": "rating",
                "name": "12",
                "title": "I have led others to a decision for salvation through faith in Christ.",
                "isRequired": true,
                "rateCount": 4,
                "rateMin": 0,
                "rateMax": 3
            },
            {
                "type": "rating",
                "name": "13",
                "title": "My home is always open to people passing through who need a place to stay.",
                "isRequired": true,
                "rateCount": 4,
                "rateMin": 0,
                "rateMax": 3
            },
            {
                "type": "rating",
                "name": "14",
                "title": "When in a group, I am the one others look to for vision and direction.",
                "isRequired": true,
                "rateCount": 4,
                "rateMin": 0,
                "rateMax": 3
            },
            {
                "type": "rating",
                "name": "15",
                "title": "When I speak, people seem to listen and agree.",
                "isRequired": true,
                "rateCount": 4,
                "rateMin": 0,
                "rateMax": 3
            },
            {
                "type": "rating",
                "name": "16",
                "title": "When a group I am in is lacking organisation, I tend to step in to fill the gap.",
                "isRequired": true,
                "rateCount": 4,
                "rateMin": 0,
                "rateMax": 3
            },
            {
                "type": "rating",
                "name": "17",
                "title": "I tend to see potential in people.",
                "isRequired": true,
                "rateCount": 4,
                "rateMin": 0,
                "rateMax": 3
            },
            {
                "type": "rating",
                "name": "18",
                "title": "I enjoy praying for long periods of time and receive leadings as to what God wants me to pray for.",
                "isRequired": true,
                "rateCount": 4,
                "rateMin": 0,
                "rateMax": 3
            },
            {
                "type": "rating",
                "name": "19",
                "title": "Through God I have revealed specific things that will happen in the future.",
                "isRequired": true,
                "rateCount": 4,
                "rateMin": 0,
                "rateMax": 3
            },
            {
                "type": "rating",
                "name": "20",
                "title": "I have enjoyed assuming the responsibility for the spiritual wel being of a particular group o f Christians.",
                "isRequired": true,
                "rateCount": 4,
                "rateMin": 0,
                "rateMax": 3
            },
            {
                "type": "rating",
                "name": "21",
                "title": "I feel I can explain the New Testament teaching about the health and ministry of the Body of Christ in a relevant way.",
                "isRequired": true,
                "rateCount": 4,
                "rateMin": 0,
                "rateMax": 3
            },
            {
                "type": "rating",
                "name": "22",
                "title": "I can intuitively arrive at solutions to fairly complicated problems.",
                "isRequired": true,
                "rateCount": 4,
                "rateMin": 0,
                "rateMax": 3
            }
        ],
        "title": "STEP 1:",
        "description": "Spiritual Gift Assessment questionaire"
    },
    {
        "name": "page3",
        "elements": [
            {
                "type": "rating",
                "name": "23",
                "title": "I have had insights of spiritual truth that others have said helped bring them closer to God",
                "isRequired": true,
                "rateCount": 4,
                "rateMin": 0,
                "rateMax": 3
            },
            {
                "type": "rating",
                "name": "24",
                "title": "I enjoyed developing and using my artistic skills (art, drama, music, photography, etc.)",
                "isRequired": true,
                "rateCount": 4,
                "rateMin": 0,
                "rateMax": 3
            },
            {
                "type": "rating",
                "name": "25",
                "title": "I can \"see\" the Spirit of God resting on certain people from time to time.",
                "isRequired": true,
                "rateCount": 4,
                "rateMin": 0,
                "rateMax": 3
            },
            {
                "type": "rating",
                "name": "26",
                "title": "My giving records show that I give considerably more than 10 percent of my income to the Lord's work.",
                "isRequired": true,
                "rateCount": 4,
                "rateMin": 0,
                "rateMax": 3
            },
            {
                "type": "rating",
                "name": "27",
                "title": "Other people have told me that I have helped them become effective in their ministries.",
                "isRequired": true,
                "rateCount": 4,
                "rateMin": 0,
                "rateMax": 3
            },
            {
                "type": "rating",
                "name": "28",
                "title": "I have cared for others when they have had material or physical needs.",
                "isRequired": true,
                "rateCount": 4,
                "rateMin": 0,
                "rateMax": 3
            },
            {
                "type": "rating",
                "name": "29",
                "title": "I am attracted to the idea of serving in another country or ethnic community.",
                "isRequired": true,
                "rateCount": 4,
                "rateMin": 0,
                "rateMax": 3
            },
            {
                "type": "rating",
                "name": "30",
                "title": "I have shared joyfuly how Christ has brought me ot Himself in a way that is meaningful to nonbelievers.",
                "isRequired": true,
                "rateCount": 4,
                "rateMin": 0,
                "rateMax": 3
            },
            {
                "type": "rating",
                "name": "31",
                "title": "I enjoy taking charge of church suppers or social events.",
                "isRequired": true,
                "rateCount": 4,
                "rateMin": 0,
                "rateMax": 3
            },
            {
                "type": "rating",
                "name": "32",
                "title": "I have believed God for the impossible and seen it happen in a tangible way.",
                "isRequired": true,
                "rateCount": 4,
                "rateMin": 0,
                "rateMax": 3
            },
            {
                "type": "rating",
                "name": "33",
                "title": "Other Christians have followed my leadership because they believed in me.",
                "isRequired": true,
                "rateCount": 4,
                "rateMin": 0,
                "rateMax": 3
            }
        ]
    },
    {
        "name": "page4",
        "elements": [
            {
                "type": "rating",
                "name": "34",
                "title": "I enjoy handling the details of organising ideas, people, resources and time for more effective ministry.",
                "isRequired": true,
                "rateCount": 4,
                "rateMin": 0,
                "rateMax": 3
            },
            {
                "type": "rating",
                "name": "35",
                "title": "I enjoyed reassuring and strengthening those who are discouraged.",
                "isRequired": true,
                "rateCount": 4,
                "rateMin": 0,
                "rateMax": 3
            },
            {
                "type": "rating",
                "name": "36",
                "title": "When I hear a prayer request, I pray for that need for several days at least.",
                "isRequired": true,
                "rateCount": 4,
                "rateMin": 0,
                "rateMax": 3
            },
            {
                "type": "rating",
                "name": "37",
                "title": "People have told me that I have communicated timely and urgent messages that must have come directly from the Lord.",
                "isRequired": true,
                "rateCount": 4,
                "rateMin": 0,
                "rateMax": 3
            },
            {
                "type": "rating",
                "name": "38",
                "title": "I feel unafraid of giving spiritual guidance and direction in a group of Christians.",
                "isRequired": true,
                "rateCount": 4,
                "rateMin": 0,
                "rateMax": 3
            },
            {
                "type": "rating",
                "name": "39",
                "title": "I can devote considerable time to learning new biblical truths in order to communicate them to others.",
                "isRequired": true,
                "rateCount": 4,
                "rateMin": 0,
                "rateMax": 3
            },
            {
                "type": "rating",
                "name": "40",
                "title": "When a person has a problem I can frequently guide him or her to the best biblical solution.",
                "isRequired": true,
                "rateCount": 4,
                "rateMin": 0,
                "rateMax": 3
            },
            {
                "type": "rating",
                "name": "41",
                "title": "Through study or experience I have discerned major strategies or techniques God seems to use in furthering His kingdom.",
                "isRequired": true,
                "rateCount": 4,
                "rateMin": 0,
                "rateMax": 3
            },
            {
                "type": "rating",
                "name": "42",
                "title": "I helped people understand themselves, their relationships and God beter through artistic expression.",
                "isRequired": true,
                "rateCount": 4,
                "rateMin": 0,
                "rateMax": 3
            },
            {
                "type": "rating",
                "name": "43",
                "title": "I can tell with a fairly high degree of assurance when a person is afflicted by an evil spirit.",
                "isRequired": true,
                "rateCount": 4,
                "rateMin": 0,
                "rateMax": 3
            },
            {
                "type": "rating",
                "name": "44",
                "title": "When I am moved by an appeal to give to God's work, I usually can find the money I need to do it.",
                "isRequired": true,
                "rateCount": 4,
                "rateMin": 0,
                "rateMax": 3
            }
        ]
    },
    {
        "name": "page5",
        "elements": [
            {
                "type": "rating",
                "name": "45",
                "title": "I have enjoyed doing routine tasks that have led to more effective ministry by others.",
                "isRequired": true,
                "rateCount": 4,
                "rateMin": 0,
                "rateMax": 3
            },
            {
                "type": "rating",
                "name": "46",
                "title": "I enjoy visiting in hospitals and/or retirement homes, and feel I do well in such a ministry.",
                "isRequired": true,
                "rateCount": 4,
                "rateMin": 0,
                "rateMax": 3
            },
            {
                "type": "rating",
                "name": "47",
                "title": "I am willing to take an active part in starting a new church.",
                "isRequired": true,
                "rateCount": 4,
                "rateMin": 0,
                "rateMax": 3
            },
            {
                "type": "rating",
                "name": "48",
                "title": "Non-Christians Have noted that they feel comfortable when they are around me, and that I have a positive effect on them towards developing a faith in Christ.",
                "isRequired": true,
                "rateCount": 4,
                "rateMin": 0,
                "rateMax": 3
            },
            {
                "type": "rating",
                "name": "49",
                "title": "When people come to our home, they indicate that they \"feel at home\" with us.",
                "isRequired": true,
                "rateCount": 4,
                "rateMin": 0,
                "rateMax": 3
            },
            {
                "type": "rating",
                "name": "50",
                "title": "Other people have told me that I had faith to accomplish what seemed impossible to them.",
                "isRequired": true,
                "rateCount": 4,
                "rateMin": 0,
                "rateMax": 3
            },
            {
                "type": "rating",
                "name": "51",
                "title": "When I set goals, others seem to accept them readily.",
                "isRequired": true,
                "rateCount": 4,
                "rateMin": 0,
                "rateMax": 3
            },
            {
                "type": "rating",
                "name": "52",
                "title": "I have been able to make effective and efficient plans for accomplishing the goals of a group.",
                "isRequired": true,
                "rateCount": 4,
                "rateMin": 0,
                "rateMax": 3
            },
            {
                "type": "rating",
                "name": "53",
                "title": "I give hope to others by directing them to the promises of God",
                "isRequired": true,
                "rateCount": 4,
                "rateMin": 0,
                "rateMax": 3
            },
            {
                "type": "rating",
                "name": "54",
                "title": "Intercessory prayer is one of my favorite ways of spending time with God.",
                "isRequired": true,
                "rateCount": 4,
                "rateMin": 0,
                "rateMax": 3
            },
            {
                "type": "rating",
                "name": "55",
                "title": "I sometimes have a strong sense of what God wants to say to people in response to particular situations.",
                "isRequired": true,
                "rateCount": 4,
                "rateMin": 0,
                "rateMax": 3
            }
        ]
    },
    {
        "name": "page6",
        "elements": [
            {
                "type": "rating",
                "name": "56",
                "title": "I have helped fellow believers by guiding them to relevant portions of the Bible and praying with them.",
                "isRequired": true,
                "rateCount": 4,
                "rateMin": 0,
                "rateMax": 3
            },
            {
                "type": "rating",
                "name": "57",
                "title": " I feel I can communicate biblical truth to others and see resulting changes in knowledge, attitudes, values or conduct.",
                "isRequired": true,
                "rateCount": 4,
                "rateMin": 0,
                "rateMax": 3
            },
            {
                "type": "rating",
                "name": "58",
                "title": "Some people indicate that I have perceived and applied biblical truth to the specific needs of fellow believers.",
                "isRequired": true,
                "rateCount": 4,
                "rateMin": 0,
                "rateMax": 3
            },
            {
                "type": "rating",
                "name": "59",
                "title": "I study and read quite a bit in order to learn new biblical truths.",
                "isRequired": true,
                "rateCount": 4,
                "rateMin": 0,
                "rateMax": 3
            },
            {
                "type": "rating",
                "name": "60",
                "title": " I like finding new and fresh ways of communicating God's truth.",
                "isRequired": true,
                "rateCount": 4,
                "rateMin": 0,
                "rateMax": 3
            },
            {
                "type": "rating",
                "name": "61",
                "title": "I can recognise whether a person's teaching is from God, from Satan, of human origin.",
                "isRequired": true,
                "rateCount": 4,
                "rateMin": 0,
                "rateMax": 3
            },
            {
                "type": "rating",
                "name": "62",
                "title": " I am so confident that God will meet my needs that I give to Him sacrificially and consistently.",
                "isRequired": true,
                "rateCount": 4,
                "rateMin": 0,
                "rateMax": 3
            },
            {
                "type": "rating",
                "name": "63",
                "title": "When I do things behind the scenes and others are helped, I am joyful.",
                "isRequired": true,
                "rateCount": 4,
                "rateMin": 0,
                "rateMax": 3
            },
            {
                "type": "rating",
                "name": "64",
                "title": "People call on me to help those who are less fortunate.",
                "isRequired": true,
                "rateCount": 4,
                "rateMin": 0,
                "rateMax": 3
            },
            {
                "type": "rating",
                "name": "65",
                "title": " I would be willing to leave comfortable surroundings if it would enable me to share Christ with more people.",
                "isRequired": true,
                "rateCount": 4,
                "rateMin": 0,
                "rateMax": 3
            },
            {
                "type": "rating",
                "name": "66",
                "title": "I get frustrated when others don't seem to share their faith with unbelievers as much as I do.",
                "isRequired": true,
                "rateCount": 4,
                "rateMin": 0,
                "rateMax": 3
            }
        ]
    },
    {
        "name": "page7",
        "elements": [
            {
                "type": "rating",
                "name": "67",
                "title": "Others have mentioned to me that I am a very hospitable person.",
                "isRequired": true,
                "rateCount": 4,
                "rateMin": 0,
                "rateMax": 3
            },
            {
                "type": "rating",
                "name": "68",
                "title": "There have been times when I have felt sure I knew God's specific will for the future growth of His work, even when others have not been so sure.",
                "isRequired": true,
                "rateCount": 4,
                "rateMin": 0,
                "rateMax": 3
            },
            {
                "type": "rating",
                "name": "question8",
                "title": "When I join a group, others seem to back of and expect me to take the leadership.",
                "isRequired": true,
                "rateCount": 4,
                "rateMin": 0,
                "rateMax": 3
            },
            {
                "type": "rating",
                "name": "70",
                "title": " I am able to give directions to others without using persuasion to get them to accomplish tasks.",
                "isRequired": true,
                "rateCount": 4,
                "rateMin": 0,
                "rateMax": 3
            },
            {
                "type": "rating",
                "name": "71",
                "title": "I reassure those who need to take courageous action in their faith, family\nor life.",
                "isRequired": true,
                "rateCount": 4,
                "rateMin": 0,
                "rateMax": 3
            },
            {
                "type": "rating",
                "name": "72",
                "title": "Others have told me that my prayers for them have been answered in\ntangible ways.",
                "isRequired": true,
                "rateCount": 4,
                "rateMin": 0,
                "rateMax": 3
            },
            {
                "type": "rating",
                "name": "73",
                "title": "I sometimes feel that I know exactly what God wants to do in ministry at a specific point in time.",
                "isRequired": true,
                "rateCount": 4,
                "rateMin": 0,
                "rateMax": 3
            },
            {
                "type": "rating",
                "name": "74",
                "title": "People have told me that I have helped them be restored to the Christian community.",
                "isRequired": true,
                "rateCount": 4,
                "rateMin": 0,
                "rateMax": 3
            },
            {
                "type": "rating",
                "name": "75",
                "title": "Studying the Bible and sharing my insights with others is very satisfyingfor me",
                "isRequired": true,
                "rateCount": 4,
                "rateMin": 0,
                "rateMax": 3
            },
            {
                "type": "rating",
                "name": "76",
                "title": "I have felt an unusual presence of God and personal confidence when important decisions needed to be made.",
                "isRequired": true,
                "rateCount": 4,
                "rateMin": 0,
                "rateMax": 3
            },
            {
                "type": "rating",
                "name": "77",
                "title": "I have the ability to discover new truths for myself through reading or observing situations firsthand.",
                "isRequired": true,
                "rateCount": 4,
                "rateMin": 0,
                "rateMax": 3
            }
        ]
    },
    {
        "name": "page8",
        "elements": [
            {
                "type": "rating",
                "name": "78",
                "title": "I apply various artistic expressions to communicate God's truth.",
                "isRequired": true,
                "rateCount": 4,
                "rateMin": 0,
                "rateMax": 3
            },
            {
                "type": "rating",
                "name": "79",
                "title": "I can tell whether a person is speaking in tongues is genuine.",
                "isRequired": true,
                "rateCount": 4,
                "rateMin": 0,
                "rateMax": 3
            },
            {
                "type": "rating",
                "name": "80",
                "title": "I have been willing to maintain a lower standard of living in order to benefit God's work.",
                "isRequired": true,
                "rateCount": 4,
                "rateMin": 0,
                "rateMax": 3
            },
            {
                "type": "rating",
                "name": "81",
                "title": "When I serve the Lord, I really don't care who gets the credit.",
                "isRequired": true,
                "rateCount": 4,
                "rateMin": 0,
                "rateMax": 3
            },
            {
                "type": "rating",
                "name": "82",
                "title": "I would enjoy spending time with a lonely, shut-in person or someone in\nprison",
                "isRequired": true,
                "rateCount": 4,
                "rateMin": 0,
                "rateMax": 3
            },
            {
                "type": "rating",
                "name": "83",
                "title": "More than most, I have had a strong desire to see peoples of other nations  won to the Lord.",
                "isRequired": true,
                "rateCount": 4,
                "rateMin": 0,
                "rateMax": 3
            },
            {
                "type": "rating",
                "name": "84",
                "title": "I am attracted to nonbelievers because of my desire to win them to Christ.",
                "isRequired": true,
                "rateCount": 4,
                "rateMin": 0,
                "rateMax": 3
            },
            {
                "type": "rating",
                "name": "85",
                "title": " I have desired to make my home available to those in the Lord's service whenever needed.",
                "isRequired": true,
                "rateCount": 4,
                "rateMin": 0,
                "rateMax": 3
            },
            {
                "type": "rating",
                "name": "86",
                "title": "Others have told me that I am a person of unusual vision, and I agree.",
                "isRequired": true,
                "rateCount": 4,
                "rateMin": 0,
                "rateMax": 3
            },
            {
                "type": "rating",
                "name": "87",
                "title": "When I am in charge, things seem to run smoothly.",
                "isRequired": true,
                "rateCount": 4,
                "rateMin": 0,
                "rateMax": 3
            },
            {
                "type": "rating",
                "name": "88",
                "title": " I have enjoyed bearing the responsibility for the success of a particular task within my church.",
                "isRequired": true,
                "rateCount": 4,
                "rateMin": 0,
                "rateMax": 3
            }
        ]
    },
    {
        "name": "page9",
        "elements": [
            {
                "type": "rating",
                "name": "89",
                "title": " I strengthen those who are wavering in their faith.",
                "isRequired": true,
                "rateCount": 4,
                "rateMin": 0,
                "rateMax": 3
            },
            {
                "type": "rating",
                "name": "90",
                "title": "When I pray, God frequently speaks to me, and I recognise His voice.",
                "isRequired": true,
                "rateCount": 4,
                "rateMin": 0,
                "rateMax": 3
            },
            {
                "type": "rating",
                "name": "91",
                "title": "I feel compelled to expose sin wherever I see it and to challenge people to repentance.",
                "isRequired": true,
                "rateCount": 4,
                "rateMin": 0,
                "rateMax": 3
            },
            {
                "type": "rating",
                "name": "92",
                "title": "\nI enjoy patiently but firmly nurturing others in their development as believers\n",
                "isRequired": true,
                "rateCount": 4,
                "rateMin": 0,
                "rateMax": 3
            },
            {
                "type": "rating",
                "name": "93",
                "title": "I enjoy explaining things ot people so that they can grow spiritually and personally.",
                "isRequired": true,
                "rateCount": 4,
                "rateMin": 0,
                "rateMax": 3
            },
            {
                "type": "rating",
                "name": "94",
                "title": " I have insights into how to solve problems that others do not see.",
                "isRequired": true,
                "rateCount": 4,
                "rateMin": 0,
                "rateMax": 3
            },
            {
                "type": "rating",
                "name": "95",
                "title": " I confidently share my knowledge and insight with others.",
                "isRequired": true,
                "rateCount": 4,
                "rateMin": 0,
                "rateMax": 3
            },
            {
                "type": "rating",
                "name": "96",
                "title": "I regularly need to get alone to reflect and develop my imagination.",
                "isRequired": true,
                "rateCount": 4,
                "rateMin": 0,
                "rateMax": 3
            },
            {
                "type": "rating",
                "name": "97",
                "title": "I can sense when demonic forces are at work in a person or situation.",
                "isRequired": true,
                "rateCount": 4,
                "rateMin": 0,
                "rateMax": 3
            },
            {
                "type": "rating",
                "name": "98",
                "title": "I believe I have been given an abundance of resources so that I may gave more to the Lord's work.",
                "isRequired": true,
                "rateCount": 4,
                "rateMin": 0,
                "rateMax": 3
            },
            {
                "type": "rating",
                "name": "99",
                "title": "I readily and happily use my natural or learned skills to help wherever needed.",
                "isRequired": true,
                "rateCount": 4,
                "rateMin": 0,
                "rateMax": 3
            }
        ]
    },
    {
        "name": "page10",
        "elements": [
            {
                "type": "rating",
                "name": "100",
                "title": "I enjoy doing practical things for others who are in need.",
                "isRequired": true,
                "rateCount": 4,
                "rateMin": 0,
                "rateMax": 3
            },
            {
                "type": "rating",
                "name": "101",
                "title": "I am able to orchestrate or oversee several church ministries",
                "isRequired": true,
                "rateCount": 4,
                "rateMin": 0,
                "rateMax": 3
            },
            {
                "type": "rating",
                "name": "102",
                "title": "I seek opportunities to talk about spiritual matters with unbelievers",
                "isRequired": true,
                "rateCount": 4,
                "rateMin": 0,
                "rateMax": 3
            },
            {
                "type": "rating",
                "name": "103",
                "title": "I can make people feel at ease even in unfamiliar surroundings.",
                "isRequired": true,
                "rateCount": 4,
                "rateMin": 0,
                "rateMax": 3
            },
            {
                "type": "rating",
                "name": "104",
                "title": "I can move forward in-spite of opposition or lack of support when I sense God's blessings in an undertaking.",
                "isRequired": true,
                "rateCount": 4,
                "rateMin": 0,
                "rateMax": 3
            },
            {
                "type": "rating",
                "name": "105",
                "title": "I figure out where we need to go and help others to get there.",
                "isRequired": true,
                "rateCount": 4,
                "rateMin": 0,
                "rateMax": 3
            },
            {
                "type": "rating",
                "name": "106",
                "title": " I can visualise a coming event, anticipate potential problems and develop contingency plans.",
                "isRequired": true,
                "rateCount": 4,
                "rateMin": 0,
                "rateMax": 3
            },
            {
                "type": "rating",
                "name": "107",
                "title": "I am able to challenge or rebuke others in order to foster spiritual growth",
                "isRequired": true,
                "rateCount": 4,
                "rateMin": 0,
                "rateMax": 3
            },
            {
                "type": "rating",
                "name": "108",
                "title": "I often see specific results in direct response to my prayers.",
                "isRequired": true,
                "rateCount": 4,
                "rateMin": 0,
                "rateMax": 3
            }
        ]
    }
]
};
function App() {
    const model = new Model(json);
    return <Survey model={model}></Survey>
}

export default App;
