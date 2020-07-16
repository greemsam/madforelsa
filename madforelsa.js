var madness;
var madnessOn = new Vue({
  el:'#madness',
  data:{
    trigger:0
  },
  methods:{
    setTrigger:()=>{
      madnessOn.trigger++;
      if(madnessOn.trigger>1){
        madnessOn.trigger = 0;
      }
      console.log(madnessOn.trigger)
    },
    createElsa:()=>{
      var echoDiv = document.getElementById('echo');
      var elsaSpan = document.createElement('span');
      var elsaText = document.createTextNode('엘사!!');
      echoDiv.appendChild(elsaSpan);
      elsaSpan.appendChild(elsaText);
    },
    textWrite:(a)=>{
      var executeButton = document.getElementById('execute');
      if(a === 1){
        madness = setInterval(madnessOn.createElsa, 50);
        executeButton.innerHTML = '광기중지'
      }else{
        clearInterval(madness);
        executeButton.innerHTML = '광기실행'
      }
    }
  }
});