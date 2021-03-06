var config = {};

//Config Parameters
config.debug = true;
config.midiPort = 0;

/*
config.keys is the most important part of this program it is important that you do NOT remove any lines
To set the key the button is assigned to simply replace the _ with the letter key you would like to use
if you would like the system to keep the key held instead of simply pressed replace: action: "tap"
with: action: "pressed"
*/
config.keys = [
     { key : "a", action: "press" }, //Button Number 1 (0, 0)
     { key : "b", action: "tap" }, //Button Number 2 (1, 0)
     { key : "_", action: "tap" }, //Button Number 3 (2, 0)
     { key : "_", action: "tap" }, //Button Number 4 (3, 0)
     { key : "_", action: "tap" }, //Button Number 5 (4, 0)
     { key : "_", action: "tap" }, //Button Number 6 (5, 0)
     { key : "_", action: "tap" }, //Button Number 7 (6, 0)
     { key : "_", action: "tap" }, //Button Number 8 (7, 0)
     { key : "_", action: "tap" }, //Button Number 9 (0, 1)
     { key : "_", action: "tap" }, //Button Number 10 (1, 1)
     { key : "_", action: "tap" }, //Button Number 11 (2, 1)
     { key : "_", action: "tap" }, //Button Number 12 (3, 1)
     { key : "_", action: "tap" }, //Button Number 13 (4, 1)
     { key : "_", action: "tap" }, //Button Number 14 (5, 1)
     { key : "_", action: "tap" }, //Button Number 15 (6, 1)
     { key : "_", action: "tap" }, //Button Number 16 (7, 1)
     { key : "_", action: "tap" }, //Button Number 17 (0, 2)
     { key : "_", action: "tap" }, //Button Number 18 (1, 2)
     { key : "_", action: "tap" }, //Button Number 19 (2, 2)
     { key : "_", action: "tap" }, //Button Number 20 (3, 2)
     { key : "_", action: "tap" }, //Button Number 21 (4, 2)
     { key : "_", action: "tap" }, //Button Number 22 (5, 2)
     { key : "_", action: "tap" }, //Button Number 23 (6, 2)
     { key : "_", action: "tap" }, //Button Number 24 (7, 2)
     { key : "_", action: "tap" }, //Button Number 25 (0, 3)
     { key : "_", action: "tap" }, //Button Number 26 (1, 3)
     { key : "_", action: "tap" }, //Button Number 27 (2, 3)
     { key : "_", action: "tap" }, //Button Number 28 (3, 3)
     { key : "_", action: "tap" }, //Button Number 29 (4, 3)
     { key : "_", action: "tap" }, //Button Number 30 (5, 3)
     { key : "_", action: "tap" }, //Button Number 31 (6, 3)
     { key : "_", action: "tap" }, //Button Number 32 (7, 3)
     { key : "_", action: "tap" }, //Button Number 33 (0, 4)
     { key : "_", action: "tap" }, //Button Number 34 (1, 4)
     { key : "_", action: "tap" }, //Button Number 35 (2, 4)
     { key : "_", action: "tap" }, //Button Number 36 (3, 4)
     { key : "_", action: "tap" }, //Button Number 37 (4, 4)
     { key : "_", action: "tap" }, //Button Number 38 (5, 4)
     { key : "_", action: "tap" }, //Button Number 39 (6, 4)
     { key : "_", action: "tap" }, //Button Number 40 (7, 4)
     { key : "_", action: "tap" }, //Button Number 41 (0, 5)
     { key : "_", action: "tap" }, //Button Number 42 (1, 5)
     { key : "_", action: "tap" }, //Button Number 43 (2, 5)
     { key : "_", action: "tap" }, //Button Number 44 (3, 5)
     { key : "_", action: "tap" }, //Button Number 45 (4, 5)
     { key : "_", action: "tap" }, //Button Number 46 (5, 5)
     { key : "_", action: "tap" }, //Button Number 47 (6, 5)
     { key : "_", action: "tap" }, //Button Number 48 (7, 5)
     { key : "_", action: "tap" }, //Button Number 49 (0, 6)
     { key : "_", action: "tap" }, //Button Number 50 (1, 6)
     { key : "_", action: "tap" }, //Button Number 51 (2, 6)
     { key : "_", action: "tap" }, //Button Number 52 (3, 6)
     { key : "_", action: "tap" }, //Button Number 53 (4, 6)
     { key : "_", action: "tap" }, //Button Number 54 (5, 6)
     { key : "_", action: "tap" }, //Button Number 55 (6, 6)
     { key : "_", action: "tap" }, //Button Number 56 (7, 6)
     { key : "_", action: "tap" }, //Button Number 57 (0, 7)
     { key : "_", action: "tap" }, //Button Number 58 (1, 7)
     { key : "_", action: "tap" }, //Button Number 59 (2, 7)
     { key : "_", action: "tap" }, //Button Number 60 (3, 7)
     { key : "_", action: "tap" }, //Button Number 61 (4, 7)
     { key : "_", action: "tap" }, //Button Number 62 (5, 7)
     { key : "_", action: "tap" }, //Button Number 63 (6, 7)
     { key : "_", action: "tap" }, //Button Number 64 (7, 7)
]





module.exports = config;
