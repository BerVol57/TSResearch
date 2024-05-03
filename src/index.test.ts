var gc = require("js-gc")
var sizeof = require('object-sizeof');


describe('Garbage Collector', () => {

    it('should garbage collect unused objects', () => {
        let obj: any = {data: "i hate typescript☻"};
        const beforeCG = process.memoryUsage().heapUsed;
        
        obj = null;
        gc();
        const afterGC = process.memoryUsage().heapUsed;
        const memoryDiff = afterGC - beforeCG;
        
        expect(memoryDiff).toBeLessThan(0); 
    });
});


describe('Create object on heap', () => {

    it('diff memory should be greater than 0', () => {
        const memory_before_heap_obj = process.memoryUsage().heapUsed;
        let some_heap_obj = "I hate typescript♥";
        const diff_memory = process.memoryUsage().heapUsed - memory_before_heap_obj;

        expect(diff_memory).toBeGreaterThan(0);
    })
})


describe('Reference type test', () => {

    it('Array passed by reference', () => {
        var value = [1, 2, 3];
        function r_incrementEach(arr: number[]){
            for(var _i = 0; _i < arr.length; _i++){
                arr[_i]++;
            }
        }
        r_incrementEach(value);
        expect(value).toEqual([2, 3, 4]);
    });

    it('Custom class passed by reference', () => {

        class CustomClass{
            public variable: number;
            constructor(variable: number){
                this.variable = variable;
            }
        };
        

        function r_increment(class_ : CustomClass){
            class_.variable++
        };

        var custom_class = new CustomClass(10);
        r_increment(custom_class);
        expect(custom_class.variable).toEqual(11);

    })
})

describe('Value type test', () => {

    it('Number passed by value', () => {

        function v_increment(value: number){
            value++
        };
        var value: number = 10
        v_increment(value)
        expect(value).toEqual(10)

    });
})

