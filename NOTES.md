# Notes

## Description

You are going to be given a word. Your job is to return the middle character of the word. If the word's length is odd, return the middle character. If the word's length is even, return the middle 2 characters.

#Examples:

```
Kata.getMiddle("test") should return "es"
Kata.getMiddle("testing") should return "t"
Kata.getMiddle("middle") should return "dd"
Kata.getMiddle("A") should return "A"
```

#Input

A word (string) of length 0 < str < 1000 (In javascript you may get slightly more than 1000 in some test cases due to an error in the test cases). You do not need to test for this. This is only here to tell you that you do not need to worry about your solution timing out.

#Output

The middle character(s) of the word represented as a string. 

## Domain
- word
- middle character

### Rules
- input: word (string) - length 0 < str < 1000
- output: 
    - length: odd -> middle character
    - length: even -> middle 2 characters

---

**Label**  
✅ done 🚧 WIP ❌ ERROR 🐛 BUG

---

TODO:

# Pomodoro 1 🍅:
- initial setup
    - update README ✅
    - update NOTES ✅
    - update package.json ✅
    - update code/test files ✅
- domain discussion ✅
- perform the 'canary' test just to check if the structure works ✅
- it should return 'A' for input equal to 'A' ✅
- it should return 'b' for input equal to 'AbA' ✅
- it should return 't' for input equal to 'testing' ✅
- it should return 'aa' for input equal to 'aa' ✅
- it should return 'dd' for input equal to 'middle' 🚧

# Pomodoro 2 🍅:
- it should return 'dd' for input equal to 'middle' ✅
- it should return 'ab' for input equal to 'ab' ✅
- refactor ✅