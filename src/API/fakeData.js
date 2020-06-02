
import A2 from '../Libraries/tonejs-instruments/samples/guitar-electric/A2.mp3'
//TODO: finish inporting all sounds to continue the data flow
let fakeData = { 
    "stringInfo": [{
        "name" : "E"
        },
        {
            "name" : "B"
        },
        {
            "name" : "G"
        },
        {
            "name" : "D"
        },
        {
            "name" : "A"
        },
        {
            "name" : "E"
        }
    ],
    "noteInfo": [{
            "name" : "A",
            "link" : A2,
            "color" : {
                "r": 241,
                "g": 112,
                "b": 19,
                "a": 1
              }
        },
        {
            "name" : "A#",
            "color" : {
                "r": 241,
                "g": 112,
                "b": 19,
                "a": 1
              }
        },
        {
            "name" : "B",
            "color" : {
                "r": 241,
                "g": 112,
                "b": 19,
                "a": 1
              }

        },
        {
            "name" : "C",
            "color" : {
                "r": 241,
                "g": 112,
                "b": 19,
                "a": 1
              }
        },
        {
            "name" : "C#",
            "color" : {
                "r": 241,
                "g": 112,
                "b": 19,
                "a": 1
              }
        },
        {
            "name" : "D",
            "color" : {
                "r": 241,
                "g": 112,
                "b": 19,
                "a": 1
              }
        },
        {
            "name" : "D#",
            "color" : {
                "r": 241,
                "g": 112,
                "b": 19,
                "a": 1
              }
        },
        {
            "name" : "E",
            "color" : {
                "r": 241,
                "g": 112,
                "b": 19,
                "a": 1
              }
        },
        {
            "name" : "F",
            "color" : {
                "r": 241,
                "g": 112,
                "b": 19,
                "a": 1
              }
        },
        {
            "name" : "F#",
            "color" : {
                "r": 241,
                "g": 112,
                "b": 19,
                "a": 1
              }
        },
        {
            "name" : "G",
            "color" : {
                "r": 241,
                "g": 112,
                "b": 19,
                "a": 1
              }
        },
        {
            "name" : "G#",
            "color" : {
                "r": 241,
                "g": 112,
                "b": 19,
                "a": 1
              }
        }
    ],
    "triads": [
        {'Root': 'A',
         'Notes': ['A', 'C', 'E']}, 
        {'Root': 'B',
         'Notes': ['B','D#', 'F#']}, 
        {'Root': 'C',
         'Notes': ['C','E', 'G']}, 
        {'Root': 'D',
         'Notes': ['D','F#', 'A']}, 
        {'Root': 'E',
         'Notes': ['E','G#', 'B']}, 
        {'Root': 'F',
         'Notes': ['F','A', 'C']}, 
        {'Root': 'G',
         'Notes': ['G','B', 'D']}, 

    ]
}


export default fakeData