import React from 'react'
class Header extends React.Component{
    constructor(props){
        super(props)
        this.pedirInfo = this.pedirInfo.bind(this)
        this.state = {
            file: "A-znSV-SHQo",
            login:"6365ff2b1eabd4e1",
            key: "pZn_xUAm"
        }
        this.hanldeClickScroll = this.hanldeClickScroll.bind(this)
    }
    hanldeClickScroll(){
        smoothScroll.scrollTo('one')
    }
    pedirInfo(){
        const respo = new XMLHttpRequest();
        respo.onreadystatechange = () =>{
            if(respo.status === 200){
                if(respo.readyState===4){
                    /*let json = JSON.parse(respo.responseText)
                    console.log(json)*/
                    var blob = new Blob([this.response], {type: 'image/png'});
                    var link = document.createElement('a');
                    link.href = window.URL.createObjectURL(blob);
                    link.download = "report.png";
                    link.click(); 
                }
            }
            }
        respo.open("GET",`https://1fgqfu3.oloadcdn.net/dl/l/3B4ozaN0bOAZ_x95/ZB1chqOWD2Q/Captura+de+pantalla+de+2019-06-01+00-02-23.png`,true)
        respo.send()
    }

    render(){
        return(
            <div id="header">
            <div className="content">
                <br/>
                <h1><a href="#">Laliana!</a></h1>
                <br/>
                <br/>
                <br/>
                <ul className="actions">
                    <li><a href="#" onClick={this.pedirInfo} className="button primary icon fa-download">Descargar</a></li>
                    <li><a onClick={this.hanldeClickScroll} className="button icon fa-chevron-down scrolly">Leer más</a></li>
                </ul>
            </div>
            <div className="image phone"><div className="inner"><br/><img src="./images/1.png" alt="" /><br/>
            </div>
            </div>
        </div>
        )
    }
}
var smoothScroll = {
	timer: null,

	stop: function () {
		clearTimeout(this.timer);
	},

	scrollTo: function (id, callback) {
		var settings = {
			duration: 2000,
			easing: {
				outQuint: function (x, t, b, c, d) {
					return c*((t=t/d-1)*t*t*t*t + 1) + b;
				}
			}
		};
		var percentage;
		var startTime;
		var node = document.getElementById(id);
		var nodeTop = node.offsetTop;
		var nodeHeight = node.offsetHeight;
		var body = document.body;
		var html = document.documentElement;
		var height = Math.max(
			body.scrollHeight,
			body.offsetHeight,
			html.clientHeight,
			html.scrollHeight,
			html.offsetHeight
		);
		var windowHeight = window.innerHeight
		var offset = window.pageYOffset;
		var delta = nodeTop - offset;
		var bottomScrollableY = height - windowHeight;
		var targetY = (bottomScrollableY < delta) ?
			bottomScrollableY - (height - nodeTop - nodeHeight + offset):
			delta;

		startTime = Date.now();
		percentage = 0;

		if (this.timer) {
			clearInterval(this.timer);
		}

		function step () {
			var yScroll;
			var elapsed = Date.now() - startTime;

			if (elapsed > settings.duration) {
				clearTimeout(this.timer);
			}

			percentage = elapsed / settings.duration;

			if (percentage > 1) {
				clearTimeout(this.timer);

				if (callback) {
					callback();
				}
			} else {
				yScroll = settings.easing.outQuint(0, elapsed, offset, targetY, settings.duration);
				window.scrollTo(0, yScroll);
				this.timer = setTimeout(step, 10);     
			}
		}

		this.timer = setTimeout(step, 10);
	}
};

export default Header;