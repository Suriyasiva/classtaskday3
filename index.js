const scores = [
    {
      marks: 32,
      name: "Yvette Merritt"
    },
    {
      marks: 57,
      name: "Lillian Ellis"
    },
    {
      marks: 22,
      name: "Mccall Carter"
    },
    {
      marks: 21,
      name: "Pate Collier"
    },
    {
      marks: 91,
      name: "Debra Beard"
    },
    {
      marks: 75,
      name: "Nettie Hancock"
    },
    {
      marks: 20,
      name: "Hatfield Hodge"
    }
  ];


  var scr=(Element)=>Element.marks>90
var res1=scores.filter(scr)
var ma1=(valuea,valueb)=>valuea+valueb.name
var mapfo=res1.reduce(ma1,"")
console.log(mapfo);


var ma=(element)=>element.marks
var res=scores.map(ma)
var foo=(a,b)=>a+b
var red=res.reduce(foo,0)
console.log(red/7);
// console.log(res);