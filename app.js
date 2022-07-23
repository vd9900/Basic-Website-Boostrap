// // alert("hloe")
const obj = `{"name":"vinith", 
"city":"managlore"}`
console.log(JSON.parse(obj));
// function wait(delay){

// }

// // console.log("1");
// const f = async () => {
//     console.log(1)
//     await wait(2000);
//     console.log(3)
//   }
// f();
// console.log("3");
// foctry objects;
// function obj(){
//     return{
//         x,
//         draw:function(){
//             console.log("cricle")
//         }
//     }
// }
// let objects = obj();
// objects.draw();
// constructor object
// console.log(this);
// function obj(){
//     this,
//     this.draw = ()=>{
//         console.log(this);
//         console.log("hello");
//     }
// }
// let object = new obj();
// object.draw();

// console.log(1);
// async function nn(){
//     let obj = await setTimeout(() => {
//          console.log(2);
//     }, 0);
// }
// nn().then(

//     console.log(3)
// )
// console.log(1)
// setTimeout(()=>{
//     console.log(2)
//     after()
// },3000)
// function after(){
//     console.log(3)
// }
function convert(min){
    return arg
}
magic = new Proxy({}, {
	get: (_, f) => ((s, ...a) => s[f].call ? s[f](...a) : s[f])
})