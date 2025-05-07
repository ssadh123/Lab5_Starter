# Lab 5 - Starter
**Author:** Saumya Sadh 

## Links

- [Speech Synthesis](https://ssadh123.github.io/Lab5_Starter/explore.html) 
- [Party Horn](https://ssadh123.github.io/Lab5_Starter/expose.html)

---

## Questions and Answers  

### 1. Would you use a unit test to test the “message” feature of a messaging application? Why or why not?  

**Answer:**  
No, a unit test is not ideal for testing the entire "message" feature of a messaging application because it involves multiple components, such as the user interface, the messaging backend, and network interactions. Unit tests are intended to isolate and test specific functions or methods in the code, such as validating that a `sendMessage()` method correctly formats a message object or that a `storeMessage()` function correctly saves the message to a database. Testing the complete messaging feature would require integration or end-to-end testing, which can verify that the messaging flow (from writing to sending to receiving) works as intended.

---

### 2. Would you use a unit test to test the “max message length” feature of a messaging application? Why or why not?  

**Answer:**  
Yes, a unit test is well-suited for testing the "max message length" feature. This is because the feature involves a specific function or method that checks the length of the message input and enforces a character limit. The test can directly target that function to verify that it correctly prevents inputs exceeding 80 characters and allows inputs up to 80 characters. This is a focused, isolated functionality that aligns well with the purpose of unit testing.