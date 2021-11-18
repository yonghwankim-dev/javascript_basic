Array.prototype.map = function(callback){
    /* this가 null인지, 배열인지 체크 */
    /* callback이 함수인지 체크 */

    const obj = this;
    let value, mapped_value;
    const A = new Array(obj.length);

    for(let i=0; i<obj.length;i++){
        value = obj[i];
        mapped_value = callback.call(null,value);
        A[i] = mapped_value;
    }

    return A;
}

const arr = [1,2,3];
const new_arr = arr.map(function(value){
    return value*value;
});

console.log(new_arr);   // Expected Output : [1,4,9]
