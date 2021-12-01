import  { Component } from "react";
import './App.css';
import raaid from "./raaid.jpg"
export default class App extends Component {
 
    constructor() {
 
        super();
        this.state = {
            counter: 0
        }
    }

    increse = () => {
        this.setState({
            counter: this.state.counter + 1
        })
    }
    decrese=()=>{
      if (this.state.counter >25){ 
      this.setState({
        counter: this.state.counter - 1
        });
    }
    }

    muftah = () => {
        this.setState({
            counter: 25
        })

    }




    render() {
        return (
            <div className="vv">

<div className="HM">
  <h1>
سلة فواكة
  </h1>
  <h2>هذه بعض الأمور الإيجابية التي عليك معرفتها عن فوائد الفواكه عمومًا:
</h2>
<p>  
غنية بالألياف والماء وتحتاج للمضغ</p>
<p>
غنية بالفيتامينات والمعادن ومضادات الأكسدة 
</p>
<p>
التقليل من فرص الإصابة ببعض الأمراض 
</p>
<p>
المساعدة على خسارة الوزن
</p>
<img  src={raaid} />
<h3>سعر سلة الفواكة 25 دينار</h3>
</div>
<div  className="HR">
                <button  style={{margin:"75px"}} onClick={this.increse}  >+</button>
                <button style={{margin:"75px"}}onClick={this.decrese}>-</button>
                <button onClick={this.muftah}>reset</button>
                <p>  {this.state.counter} </p>
</div>
                
                




            </div>
        )
    }







}