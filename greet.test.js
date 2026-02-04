const greet = require("./greet"); 
describe("greet function", () => { 
    test("returns a greeting message", () => { 
        expect(greet("Nasia")).toBe("Hello, Nasia!"); 
    }); 
    test("handles empty input", () => { 
        expect(greet("")).toBe("Hello!"); }); 
    });