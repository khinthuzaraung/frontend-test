(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{16:function(e,t,a){},17:function(e,t,a){},21:function(e,t,a){e.exports=a(42)},27:function(e,t,a){},32:function(e,t,a){},34:function(e,t,a){},38:function(e,t,a){},40:function(e,t,a){},42:function(e,t,a){"use strict";a.r(t);var l=a(0),r=a.n(l),n=a(18),i=a.n(n),s=(a(27),a(7)),o=a(8),c=a(10),m=a(9),d=a(11),h=a(44),p=a(45),u=a(43),v=a(46),E=function(e){function t(){var e,a;Object(s.a)(this,t);for(var l=arguments.length,r=new Array(l),n=0;n<l;n++)r[n]=arguments[n];return(a=Object(c.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={},a}return Object(d.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(v.a,{to:"/"},r.a.createElement("label",{style:{paddingLeft:5,fontSize:40}},"\u2630")),r.a.createElement(v.a,{to:"/watchlist"},r.a.createElement("label",{style:{fontSize:60}},"\u2606")))}}]),t}(l.Component),f=(a(32),a(34),a(16),a(17),a(4)),g=a.n(f),b=a(2),w=function(e){function t(){var e,a;Object(s.a)(this,t);for(var l=arguments.length,r=new Array(l),n=0;n<l;n++)r[n]=arguments[n];return(a=Object(c.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={watchlist:[],items:[],show:!1,showTrailer:!1,crew:[],cast:[],relatedMovies:[],relatedMovieTitle:"",backgroundsTitle:"",backdrops:[],trailer:[{key:"QMtHZGn1Ka4"}],detail:[{genres:[{id:18,name:""}],percent_class:""}]},a.showModal=function(){a.movieDetail(),a.movieTrailer(),a.relatedMovie(),a.getBackgrounds(),a.setState({show:!0})},a.hideModal=function(){a.setState({show:!1})},a.showModalTrailer=function(){a.setState({showTrailer:!0})},a.hideModalTrailer=function(){a.setState({showTrailer:!1})},a}return Object(d.a)(t,e),Object(o.a)(t,[{key:"handleAdd",value:function(e){var t=this.props.movie.id;this.addToWatchList(t)}},{key:"addToWatchList",value:function(e){var t;t={id:e,title:this.props.movie.title,release_date:this.props.movie.release_date,poster:this.props.movie.poster,vote_average:this.props.movie.vote_average,overview:this.props.movie.overview};var a=[];null!==localStorage.getItem("watchlistWpk")?(a=Array.from(JSON.parse(localStorage.getItem("watchlistWpk"))))&&(a.push(t),a=this.getUnique(a,"id"),localStorage.setItem("watchlistWpk",JSON.stringify(a)),this.setState({watchlist:a})):(this.setState({watchlist:t}),localStorage.setItem("watchlistWpk",JSON.stringify(t)))}},{key:"getUnique",value:function(e,t){return e.map(function(e){return e[t]}).map(function(e,t,a){return a.indexOf(e)===t&&t}).filter(function(t){return e[t]}).map(function(t){return e[t]})}},{key:"movieDetail",value:function(){var e=this,t="https://api.themoviedb.org/3/movie/"+this.props.movie.id+"?api_key=4ccda7a34189fcea2fc752a6ee339500&append_to_response=credits";g.a.ajax({url:t,success:function(t){var a=t,l=a.runtime,r=Math.trunc(l/60),n=l%60;a.runtime=r+"hr "+n+"min";var i=a.release_date.split("-");a.release_date=i[0],a.percent=10*a.vote_average,a.percent_class="c100 p"+a.percent+" dark small green";var s=[];s.push(a);var o=a.credits.cast;o.length>5&&(o=o.slice(0,5));var c=a.credits.crew;c.length>5&&(c=c.slice(0,5)),o.forEach(function(e){null!==e.profile_path?e.profile_path="https://image.tmdb.org/t/p/w185"+e.profile_path:e.profile_path="https://www.underconsideration.com/brandnew/archives/google_broken_image_00_b_logo_detail.gif"}),e.setState({detail:s}),e.setState({crew:c}),e.setState({cast:o})},error:function(e,t,a){console.error("Failed to fetch data")}})}},{key:"relatedMovie",value:function(){var e=this,t="https://api.themoviedb.org/3/movie/"+this.props.movie.id+"/similar?api_key=4ccda7a34189fcea2fc752a6ee339500&language=en-US";g.a.ajax({url:t,success:function(t){var a=t.results;a.length>3&&(a=a.slice(0,3)),a.length>0&&e.setState({relatedMovieTitle:"Related Movies"}),a.forEach(function(e){null!==e.poster_path?e.poster_path="https://image.tmdb.org/t/p/w185"+e.poster_path:e.poster_path="https://www.underconsideration.com/brandnew/archives/google_broken_image_00_b_logo_detail.gif"}),e.setState({relatedMovies:a})},error:function(e,t,a){console.error("Failed to fetch data")}})}},{key:"getBackgrounds",value:function(){var e=this,t="https://api.themoviedb.org/3/movie/"+this.props.movie.id+"/images?api_key=4ccda7a34189fcea2fc752a6ee339500&language=ru-RU&include_image_language=ru,null";g.a.ajax({url:t,success:function(t){var a=t.posters;a.length>4&&(a=a.slice(0,4)),a.length>0&&e.setState({backgroundsTitle:"Backgrounds"}),a.forEach(function(e){null!==e.file_path?e.file_path="https://image.tmdb.org/t/p/w185"+e.file_path:e.file_path="https://www.underconsideration.com/brandnew/archives/google_broken_image_00_b_logo_detail.gif"}),e.setState({backdrops:a})},error:function(e,t,a){console.error("Failed to fetch data")}})}},{key:"movieTrailer",value:function(){var e=this,t="https://api.themoviedb.org/3/movie/"+this.props.movie.id+"/videos?api_key=4ccda7a34189fcea2fc752a6ee339500&language=en-US";g.a.ajax({url:t,success:function(t){var a=t.results,l=a;l.length>0&&(l[0].key="https://www.youtube.com/embed/"+a[0].key,e.setState({trailer:l}))},error:function(e,t,a){console.error("Failed to fetch data")}})}},{key:"render",value:function(){return r.a.createElement("div",{key:this.props.movie.id,style:{width:"230px",height:"420px",paddingTop:25,color:"#00cca3",float:"left"}},r.a.createElement("main",null,r.a.createElement(k,{show:this.state.show,handleClose:this.hideModal},r.a.createElement("div",{className:"modal-div1"},r.a.createElement("div",{className:"modal-img"},r.a.createElement("img",{style:{position:"relative"},alt:"poster",src:this.props.movie.poster})),r.a.createElement("div",{className:"bookmark-div"},r.a.createElement("button",{className:"icon-btn"},r.a.createElement(b.a,null)),r.a.createElement("span",null,"Bookmark "),r.a.createElement("button",{className:"icon-btn",id:this.props.movie.id,onClick:this.handleAdd.bind(this)},r.a.createElement(b.e,null))," ","add to watchList"),r.a.createElement("div",{className:"related-div"},r.a.createElement("div",{className:"modal-header",style:{paddingLeft:20}},r.a.createElement("strong",null,this.state.relatedMovieTitle),r.a.createElement("br",null)),this.state.relatedMovies.map(function(e,t){return r.a.createElement("div",{className:"related-movie",key:t},r.a.createElement("div",{className:"related-img"},r.a.createElement("img",{alt:"poster",src:e.poster_path})),r.a.createElement("br",null),e.title)}))),r.a.createElement("div",{className:"modal-div2"},r.a.createElement("div",{className:"modal-title"},r.a.createElement("h2",null,r.a.createElement("strong",null,this.props.movie.title))),r.a.createElement("div",null,r.a.createElement("div",{className:"detail-top"},r.a.createElement("div",{className:this.state.detail[0].percent_class},r.a.createElement("span",{style:{color:"#fff"}},r.a.createElement("strong",null,this.state.detail[0].percent),r.a.createElement("sup",{style:{fontSize:12}},"%")),r.a.createElement("div",{className:"slice"},r.a.createElement("div",{className:"bar"}),r.a.createElement("div",{className:"fill"}))),r.a.createElement("div",{className:"links"},r.a.createElement("button",{className:"trailer-btn",onClick:this.showModalTrailer},r.a.createElement("span",{className:"green-text"},r.a.createElement("span",{style:{fontSize:32}},r.a.createElement(b.d,null)),r.a.createElement("br",null),"PlayTrailer"))),r.a.createElement("div",{className:"info-div"},"Genres:"," ",r.a.createElement("span",{className:"green-text"},this.state.detail[0].genres.map(function(e){return e.name}).join(", ")),r.a.createElement("br",null),"Release Year:"," ",r.a.createElement("span",{className:"green-text"},this.state.detail[0].release_date),r.a.createElement("br",null),"Duration:"," ",r.a.createElement("span",{className:"green-text"},this.state.detail[0].runtime)))),r.a.createElement("hr",null),r.a.createElement("div",null,r.a.createElement("div",{className:"modal-header",style:{paddingBottom:0}},r.a.createElement("strong",null,"Overview")),r.a.createElement("p",{className:"overview"},this.state.detail[0].overview)),r.a.createElement("div",{className:"crew-div"},r.a.createElement("div",{className:"modal-header"},r.a.createElement("strong",null,"Feature Crew"),r.a.createElement("br",null)),this.state.crew.map(function(e,t){return r.a.createElement("div",{key:t,className:"crew"},e.job," :"," ",r.a.createElement("span",{className:"green-text"},e.name))})),r.a.createElement("hr",null),r.a.createElement("div",{className:"modal-header"},r.a.createElement("strong",null,"Top Billed Cast"),r.a.createElement("br",null)),r.a.createElement("div",{className:"cast-div"},this.state.cast.map(function(e,t){return r.a.createElement("div",{className:"cast",key:t},r.a.createElement("div",{className:"cast-profile"},r.a.createElement("img",{alt:"profile",src:e.profile_path})),r.a.createElement("br",null),e.name,r.a.createElement("br",null),r.a.createElement("span",{className:"green-text"},e.character))})),r.a.createElement("br",null),r.a.createElement("hr",null),r.a.createElement("div",{className:"modal-header"},r.a.createElement("strong",null,this.state.backgroundsTitle),r.a.createElement("br",null)),this.state.backdrops.map(function(e,t){return r.a.createElement("div",{className:"backdrops",key:t},r.a.createElement("img",{alt:"backgrounds",src:e.file_path}))})),r.a.createElement(y,{show:this.state.showTrailer,handleCloseTrailer:this.hideModalTrailer},r.a.createElement("iframe",{title:this.state.trailer[0].key,src:this.state.trailer[0].key,width:"500",height:"400",frameBorder:"0",allowFullScreen:"allowFullScreen"}))),r.a.createElement("div",{className:"poster-container",id:this.props.movie.id},r.a.createElement("div",{className:"poster",id:this.props.movie.id,onClick:this.showModal},r.a.createElement("div",{className:"movie-poster"},r.a.createElement("img",{alt:"poster",src:this.props.movie.poster})),r.a.createElement("div",{className:"hoverText"},r.a.createElement("strong",null,this.props.movie.title),r.a.createElement("p",null,this.props.movie.overview)))),r.a.createElement("br",null),r.a.createElement("center",null,r.a.createElement("div",{className:"title"},r.a.createElement("strong",null," ",this.props.movie.title),r.a.createElement("br",null),r.a.createElement("span",{style:{color:"#fff",textAlign:"left",letterSpacing:"0.2mm"}},"Year :"),r.a.createElement("span",null," ",this.props.movie.release_date))),r.a.createElement("center",null,r.a.createElement("div",{className:"vote"},r.a.createElement("strong",null,this.props.movie.vote_average),r.a.createElement("span",{className:"icons"},r.a.createElement(b.c,null),r.a.createElement(b.a,null),r.a.createElement(b.e,null)))),r.a.createElement("br",null)))}}]),t}(l.Component),k=function(e){var t=e.handleClose,a=e.show,l=e.children,n=a?"modal display-block":"modal display-none";return r.a.createElement("div",{className:n},r.a.createElement("div",{className:"modal-main"},r.a.createElement("button",{className:"back-btn",onClick:t},r.a.createElement(b.b,null),"Back to all movies"),l))},y=function(e){var t=e.handleCloseTrailer,a=e.show,l=e.children,n=a?"modal display-block":"modal display-none";return r.a.createElement("div",{className:n},r.a.createElement("div",{className:"trailermodal-main"},r.a.createElement("button",{onClick:t,style:{background:"red"}},r.a.createElement(b.f,null)),r.a.createElement("br",null),l))},_=w,N=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(c.a)(this,Object(m.a)(t).call(this,e))).state={rows:[],watchList:[]},a.pageCnt=1,a}return Object(d.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){this.filterMovie("popular")}},{key:"filterMovie",value:function(e){var t=this,a=[];this.setState({rows:[]});for(var l=function(l){a=[];var n="https://api.themoviedb.org/3/movie/"+e+"?api_key=4ccda7a34189fcea2fc752a6ee339500&language=en-US&page="+l;g.a.ajax({url:n,success:function(e){e.results.forEach(function(e){e.poster="https://image.tmdb.org/t/p/w185"+e.poster_path;var t=e.release_date.split("-");e.release_date=t[0];var l=r.a.createElement(_,{key:e.id,movie:e});a.push(l)}),l===t.pageCnt&&t.setState({rows:a})},error:function(e,t,a){console.error("Failed to fetch data")}})},n=1;n<=this.pageCnt;n++)l(n)}},{key:"performSearch",value:function(e){var t=this,a="https://api.themoviedb.org/3/search/movie?api_key=4ccda7a34189fcea2fc752a6ee339500&query="+e;g.a.ajax({url:a,success:function(e){var a=e.results,l=[];a.forEach(function(e){null!==e.poster_path?e.poster="https://image.tmdb.org/t/p/w185"+e.poster_path:e.poster="https://www.underconsideration.com/brandnew/archives/google_broken_image_00_b_logo_detail.gif";var t=e.release_date.split("-");e.release_date=t[0];var a=r.a.createElement(_,{key:e.id,movie:e});l.push(a)}),t.setState({rows:l})},error:function(e,t,a){console.error("Failed to fetch data")}})}},{key:"searchChangeHandler",value:function(e){var t=e.target.value;""===t.trim()?this.filterMovie("popular"):this.performSearch(t)}},{key:"buttonHandler",value:function(e){var t=e.target.id;this.filterMovie(t)}},{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement("div",{className:"title-box"},"All Movies",r.a.createElement("hr",null)),r.a.createElement("br",null),r.a.createElement("input",{className:"search-box",style:{fontSize:20,display:"block",width:"95%",marginTop:0,borderTop:0,borderLeft:0,borderRight:0,borderBottom:"0.3px solid #8091A5",marginLeft:"30px",backgroundColor:"#262d40",color:"white"},onChange:this.searchChangeHandler.bind(this),placeholder:"Search..."}),r.a.createElement("div",{className:"button-div"},r.a.createElement("button",{type:"button",className:"btn btn-outline-primary",id:"popular",onClick:this.buttonHandler.bind(this)},"Popular"),r.a.createElement("button",{type:"button",className:"btn btn-outline-primary",id:"top_rated",onClick:this.buttonHandler.bind(this)},"Toprated"),r.a.createElement("button",{type:"button",className:"btn btn-outline-primary",id:"upcoming",onClick:this.buttonHandler.bind(this)},"Upcoming"),r.a.createElement("button",{type:"button",className:"btn btn-outline-primary",id:"now_playing",onClick:this.buttonHandler.bind(this)},"Playing")),r.a.createElement("div",{style:{position:"relative",maxHeight:"430px",overflowY:"scroll",overflowX:"hidden"}},this.state.rows))}}]),t}(l.Component),S=a(12),T=(a(38),function(e){function t(){var e,a;Object(s.a)(this,t);for(var l=arguments.length,r=new Array(l),n=0;n<l;n++)r[n]=arguments[n];return(a=Object(c.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={watchlist:[],items:[],show:!1,showTrailer:!1,crew:[],cast:[],relatedMovies:[],backdrops:[],relatedMovieTitle:"",backgroundsTitle:"",trailer:[{key:"QMtHZGn1Ka4"}],detail:[{genres:[{id:18,name:""}],percent_class:""}]},a.showModal=function(){a.movieDetail(),a.movieTrailer(),a.relatedMovie(),a.getBackgrounds(),a.setState({show:!0})},a.hideModal=function(){a.setState({show:!1})},a.showModalTrailer=function(){a.setState({showTrailer:!0})},a.hideModalTrailer=function(){a.setState({showTrailer:!1})},a}return Object(d.a)(t,e),Object(o.a)(t,[{key:"handleRemove",value:function(e){var t=this.props.movie.id;this.removeMovie(t)}},{key:"removeMovie",value:function(e){var t=JSON.parse(localStorage.getItem("watchlistWpk"));t=t.filter(function(t){return t.id!==e}),localStorage.setItem("watchlistWpk",JSON.stringify(t)),this.props.displayWatchlist()}},{key:"movieDetail",value:function(){var e=this,t="https://api.themoviedb.org/3/movie/"+this.props.movie.id+"?api_key=4ccda7a34189fcea2fc752a6ee339500&append_to_response=credits";g.a.ajax({url:t,success:function(t){var a=t,l=a.runtime,r=Math.trunc(l/60),n=l%60;a.runtime=r+"hr "+n+"min";var i=a.release_date.split("-");a.release_date=i[0],a.percent=10*a.vote_average,a.percent_class="c100 p"+a.percent+" dark small green";var s=[];s.push(a);var o=a.credits.cast;o.length>5&&(o=o.slice(0,5));var c=a.credits.crew;c.length>5&&(c=c.slice(0,5)),o.forEach(function(e){null!==e.profile_path?e.profile_path="https://image.tmdb.org/t/p/w185"+e.profile_path:e.profile_path="https://www.underconsideration.com/brandnew/archives/google_broken_image_00_b_logo_detail.gif"}),e.setState({detail:s}),e.setState({crew:c}),e.setState({cast:o})},error:function(e,t,a){console.error("Failed to fetch data")}})}},{key:"relatedMovie",value:function(){var e=this,t="https://api.themoviedb.org/3/movie/"+this.props.movie.id+"/similar?api_key=4ccda7a34189fcea2fc752a6ee339500&language=en-US";g.a.ajax({url:t,success:function(t){var a=t.results;a.length>3&&(a=a.slice(0,3)),a.length>0&&e.setState({relatedMovieTitle:"Related Movies"}),a.forEach(function(e){null!==e.poster_path?e.poster_path="https://image.tmdb.org/t/p/w185"+e.poster_path:e.poster_path="https://www.underconsideration.com/brandnew/archives/google_broken_image_00_b_logo_detail.gif"}),e.setState({relatedMovies:a})},error:function(e,t,a){console.error("Failed to fetch data")}})}},{key:"getBackgrounds",value:function(){var e=this,t="https://api.themoviedb.org/3/movie/"+this.props.movie.id+"/images?api_key=4ccda7a34189fcea2fc752a6ee339500&language=ru-RU&include_image_language=ru,null";g.a.ajax({url:t,success:function(t){var a=t.posters;a.length>4&&(a=a.slice(0,4)),a.length>0&&e.setState({backgroundsTitle:"Backgrounds"}),a.forEach(function(e){null!==e.file_path?e.file_path="https://image.tmdb.org/t/p/w185"+e.file_path:e.file_path="https://www.underconsideration.com/brandnew/archives/google_broken_image_00_b_logo_detail.gif"}),e.setState({backdrops:a})},error:function(e,t,a){console.error("Failed to fetch data")}})}},{key:"movieTrailer",value:function(){var e=this,t="https://api.themoviedb.org/3/movie/"+this.props.movie.id+"/videos?api_key=4ccda7a34189fcea2fc752a6ee339500&language=en-US";g.a.ajax({url:t,success:function(t){var a=t.results,l=a;l.length>0&&(l[0].key="https://www.youtube.com/embed/"+a[0].key,e.setState({trailer:l}))},error:function(e,t,a){console.error("Failed to fetch data")}})}},{key:"render",value:function(){return r.a.createElement("div",{key:this.props.movie.id,style:{width:230,height:460,paddingTop:25,color:"#00cca3",float:"left"}},r.a.createElement("main",null,r.a.createElement(M,{show:this.state.show,handleClose:this.hideModal},r.a.createElement("div",{className:"modal-div1"},r.a.createElement("div",{className:"modal-img"},r.a.createElement("img",{style:{position:"relative"},alt:"poster",src:this.props.movie.poster})),r.a.createElement("div",{className:"bookmark-div"},r.a.createElement("button",{className:"icon-btn"},r.a.createElement(b.a,null)),r.a.createElement("span",null,"Bookmark "),r.a.createElement("button",{className:"icon-btn"},r.a.createElement(b.e,null))," ","added to watchList"),r.a.createElement("div",{className:"related-div"},r.a.createElement("div",{className:"modal-header",style:{paddingLeft:20}},r.a.createElement("strong",null,this.state.relatedMovieTitle),r.a.createElement("br",null)),this.state.relatedMovies.map(function(e,t){return r.a.createElement("div",{className:"related-movie",key:t},r.a.createElement("div",{className:"related-img"},r.a.createElement("img",{alt:"poster",src:e.poster_path})),r.a.createElement("br",null),e.title)}))),r.a.createElement("div",{className:"modal-div2"},r.a.createElement("div",{className:"modal-title"},r.a.createElement("h2",null,r.a.createElement("strong",null,this.props.movie.title))),r.a.createElement("div",null,r.a.createElement("div",{className:"detail-top"},r.a.createElement("div",{className:this.state.detail[0].percent_class},r.a.createElement("span",{style:{color:"#fff"}},r.a.createElement("strong",null,this.state.detail[0].percent),r.a.createElement("sup",{style:{fontSize:12}},"%")),r.a.createElement("div",{className:"slice"},r.a.createElement("div",{className:"bar"}),r.a.createElement("div",{className:"fill"}))),r.a.createElement("div",{className:"links"},r.a.createElement("button",{className:"trailer-btn",onClick:this.showModalTrailer},r.a.createElement("span",{className:"green-text"},r.a.createElement("span",{style:{fontSize:32}},r.a.createElement(b.d,null)),r.a.createElement("br",null),"PlayTrailer"))),r.a.createElement("div",{className:"info-div"},"Genres:"," ",r.a.createElement("span",{className:"green-text"},this.state.detail[0].genres.map(function(e){return e.name}).join(", ")),r.a.createElement("br",null),"Release Year:"," ",r.a.createElement("span",{className:"green-text"},this.state.detail[0].release_date),r.a.createElement("br",null),"Duration:"," ",r.a.createElement("span",{className:"green-text"},this.state.detail[0].runtime)))),r.a.createElement("hr",null),r.a.createElement("div",null,r.a.createElement("div",{className:"modal-header",style:{paddingBottom:0}},r.a.createElement("strong",null,"Overview")),r.a.createElement("p",{className:"overview"},this.state.detail[0].overview)),r.a.createElement("div",{className:"crew-div"},r.a.createElement("div",{className:"modal-header"},r.a.createElement("strong",null,"Feature Crew"),r.a.createElement("br",null)),this.state.crew.map(function(e,t){return r.a.createElement("div",{key:t,className:"crew"},e.job," :"," ",r.a.createElement("span",{className:"green-text"},e.name))})),r.a.createElement("hr",null),r.a.createElement("div",{className:"modal-header"},r.a.createElement("strong",null,"Top Billed Cast"),r.a.createElement("br",null)),r.a.createElement("div",{className:"cast-div"},this.state.cast.map(function(e,t){return r.a.createElement("div",{className:"cast",key:t},r.a.createElement("div",{className:"cast-profile"},r.a.createElement("img",{alt:"profile",src:e.profile_path}),r.a.createElement("br",null)),e.name,r.a.createElement("br",null),r.a.createElement("span",{className:"green-text"},e.character))})),r.a.createElement("br",null),r.a.createElement("hr",null),r.a.createElement("div",{className:"modal-header"},r.a.createElement("strong",null,this.state.backgroundsTitle),r.a.createElement("br",null)),this.state.backdrops.map(function(e,t){return r.a.createElement("div",{className:"backdrops",key:t},r.a.createElement("img",{alt:"backgrounds",src:e.file_path}))})),r.a.createElement(j,{show:this.state.showTrailer,handleCloseTrailer:this.hideModalTrailer},r.a.createElement("iframe",{title:this.state.trailer[0].key,src:this.state.trailer[0].key,width:"500",height:"400",frameBorder:"0",allowFullScreen:"allowFullScreen"}))),r.a.createElement("div",{className:"poster-container",id:this.props.movie.id},r.a.createElement("div",{className:"poster",id:this.props.movie.id,onClick:this.showModal},r.a.createElement("div",{className:"movie-poster"},r.a.createElement("img",{alt:"poster",src:this.props.movie.poster})),r.a.createElement("div",{className:"hoverText"},r.a.createElement("strong",null,this.props.movie.title),r.a.createElement("p",null,this.props.movie.overview)))),r.a.createElement("br",null),r.a.createElement("center",null,r.a.createElement("div",{className:"title"},r.a.createElement("strong",null,this.props.movie.title),r.a.createElement("br",null),r.a.createElement("span",{style:{textAlign:"left",letterSpacing:"0.2mm",color:"#fff"}},"Year :"),r.a.createElement("span",null," ",this.props.movie.release_date))),r.a.createElement("center",null,r.a.createElement("div",{className:"vote"},r.a.createElement("strong",null,this.props.movie.vote_average),r.a.createElement("span",{className:"icons"},r.a.createElement(b.c,null),r.a.createElement(b.a,null),r.a.createElement(b.e,null))),r.a.createElement("button",{className:"btn-remove",id:this.props.movie.id,onClick:this.handleRemove.bind(this)},"Remove")),r.a.createElement("br",null)))}}]),t}(l.Component)),M=function(e){var t=e.handleClose,a=e.show,l=e.children,n=a?"modal display-block":"modal display-none";return r.a.createElement("div",{className:n},r.a.createElement("div",{className:"modal-main"},r.a.createElement("button",{className:"back-btn",onClick:t},r.a.createElement(b.b,null),"Back to watchlist"),r.a.createElement("br",null),l))},j=function(e){var t=e.handleCloseTrailer,a=e.show,l=e.children,n=a?"modal display-block":"modal display-none";return r.a.createElement("div",{className:n},r.a.createElement("div",{className:"trailermodal-main"},r.a.createElement("button",{onClick:t,style:{background:"red"}},r.a.createElement(b.f,null)),r.a.createElement("br",null),l))},x=T,C=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(c.a)(this,Object(m.a)(t).call(this,e))).state={watchList:[]},a.displayWatchlist=a.displayWatchlist.bind(Object(S.a)(Object(S.a)(a))),a}return Object(d.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){this.displayWatchlist()}},{key:"displayWatchlist",value:function(){var e,t=this,a=[],l=[];(e=JSON.parse(localStorage.getItem("watchlistWpk")))&&(l=e),Array.prototype.forEach.call(l,function(e){var l=r.a.createElement(x,{displayWatchlist:t.displayWatchlist,key:e.id,movie:e});a.push(l)}),this.setState({rows:a})}},{key:"performSearch",value:function(e){var t=this,a="https://api.themoviedb.org/3/search/movie?api_key=4ccda7a34189fcea2fc752a6ee339500&query="+e;g.a.ajax({url:a,success:function(e){var a=e.results,l=[];a.forEach(function(e){null!==e.poster_path?e.poster="https://image.tmdb.org/t/p/w185"+e.poster_path:e.poster="https://www.underconsideration.com/brandnew/archives/google_broken_image_00_b_logo_detail.gif";var t=r.a.createElement(_,{key:e.id,movie:e});l.push(t)}),t.setState({rows:l})},error:function(e,t,a){console.error("Failed to fetch data")}})}},{key:"searchChangeHandler",value:function(e){var t=e.target.value;""===t.trim()?this.displayWatchlist():this.performSearch(t)}},{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement("div",{className:"watchlist-title-box"},"My Watchlist",r.a.createElement("hr",null)),r.a.createElement("input",{className:"search-box",style:{fontSize:20,display:"block",width:"95%",marginTop:30,marginBottom:20,borderTop:0,borderLeft:0,borderRight:0,borderBottom:"0.3px solid #8091A5",marginLeft:"30px",backgroundColor:"#262d40",color:"white"},onChange:this.searchChangeHandler.bind(this),placeholder:"Search..."}),r.a.createElement("div",{style:{position:"relative",height:"520px",overflowY:"scroll",overflowX:"hidden"}},this.state.rows))}}]),t}(l.Component),O=(a(40),function(e){function t(){var e,a;Object(s.a)(this,t);for(var l=arguments.length,r=new Array(l),n=0;n<l;n++)r[n]=arguments[n];return(a=Object(c.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={},a}return Object(d.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement(h.a,null,r.a.createElement("div",null,r.a.createElement("div",{className:"sidenav"},r.a.createElement(E,{style:{position:"fix"}})),r.a.createElement("div",{className:"main"},r.a.createElement(p.a,null,r.a.createElement(u.a,{path:"/",component:N,exact:!0}),r.a.createElement(u.a,{path:"/frontend-test/",component:N,exact:!0}),r.a.createElement(u.a,{path:"/watchlist",component:C})))))}}]),t}(l.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(O,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[21,2,1]]]);
//# sourceMappingURL=main.b7adf388.chunk.js.map