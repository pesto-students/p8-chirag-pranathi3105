const mathsOperations = require("./Calculator");

describe("Calculator tests",()=>{
    test("adding 1+2 should return 3",()=>{
        expect(mathsOperations.sum(1,2)).toBe(3)
    })
    test("adding 1+2 should return 10",()=>{
        expect(mathsOperations.sum(1,2)).toBe(10)
    })
    test("subtracting 2 from 10 should return 8",()=>{
        expect(mathsOperations.diff(10,2)).toBe(8)
    })
    test("multiplying 2 and 8 should return 16",()=>{
        expect(mathsOperations.product(2,8)).toBe(16)
    })
})              