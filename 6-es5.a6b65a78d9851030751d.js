function _classCallCheck(c,t){if(!(c instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(c,t){for(var e=0;e<t.length;e++){var n=t[e];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(c,n.key,n)}}function _createClass(c,t,e){return t&&_defineProperties(c.prototype,t),e&&_defineProperties(c,e),c}(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{M0ir:function(c,t,e){"use strict";e.r(t),e.d(t,"AuditoriaAmbientalModule",(function(){return _}));var n,a,i,r=e("W/RB"),o=e("tk/3"),s=e("x4Iw"),d=e("212I"),u=e("tyNb"),l=e("PC/O"),b=e("//6i"),f=e("fXoL"),m=e("N/25"),p=e("Wp6s"),h=e("bTqV"),C=e("NFeN"),A=[{path:"",component:(n=function(){function c(t){_classCallCheck(this,c),this.authService=t,this.i18n=b.a}return _createClass(c,[{key:"ngOnInit",value:function(){this.razonSocial=this.authService.usuarioLogged.razonSocial?this.authService.usuarioLogged.razonSocial:this.authService.usuarioLogged.nombreUsuario}}]),c}(),n.\u0275fac=function(c){return new(c||n)(f.Xb(m.a))},n.\u0275cmp=f.Rb({type:n,selectors:[["app-auditoria-ambiental-main"]],decls:23,vars:6,consts:[[1,"contenedor"],[1,"div-center"],["width","400","src","assets/img/others/auditoria_ambiental_1.svg"],["mat-stroked-button","","color","accent"]],template:function(c,t){1&c&&(f.dc(0,"mat-card",0),f.dc(1,"mat-card-title",1),f.Nc(2),f.cc(),f.dc(3,"mat-card-header",1),f.Yb(4,"img",2),f.cc(),f.dc(5,"mat-card-content"),f.Yb(6,"br"),f.dc(7,"div",1),f.dc(8,"p"),f.Nc(9),f.dc(10,"strong"),f.Nc(11),f.cc(),f.Nc(12),f.cc(),f.cc(),f.Yb(13,"br"),f.dc(14,"mat-card-actions",1),f.dc(15,"button",3),f.dc(16,"mat-icon"),f.Nc(17,"note_add"),f.cc(),f.Nc(18),f.cc(),f.dc(19,"button",3),f.dc(20,"mat-icon"),f.Nc(21,"credit_card"),f.cc(),f.Nc(22),f.cc(),f.cc(),f.cc(),f.cc()),2&c&&(f.Kb(2),f.Pc(" ",t.i18n.AUDITORIA.TITLE," "),f.Kb(7),f.Pc("",t.i18n.AUDITORIA.SALUDO," "),f.Kb(2),f.Oc(t.razonSocial),f.Kb(1),f.Pc(", ",t.i18n.AUDITORIA.PARRAFO,""),f.Kb(6),f.Pc(" ",t.i18n.AUDITORIA.BTN_SOLICITAR_CITA," "),f.Kb(4),f.Pc(" ",t.i18n.AUDITORIA.BTN_COMPRAR_CITA," "))},directives:[p.a,p.i,p.e,p.d,p.b,h.a,C.a],styles:[".contenedor[_ngcontent-%COMP%]{display:flex;flex-direction:column;margin:1rem auto;max-width:50%}.div-center[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center}"]}),n),canActivate:[l.a]}],v=((i=function c(){_classCallCheck(this,c)}).\u0275mod=f.Vb({type:i}),i.\u0275inj=f.Ub({factory:function(c){return new(c||i)},imports:[[u.d.forChild(A)],u.d]}),i),_=((a=function c(){_classCallCheck(this,c)}).\u0275mod=f.Vb({type:a}),a.\u0275inj=f.Ub({factory:function(c){return new(c||a)},providers:[{provide:o.a,useClass:s.a,multi:!0},{provide:o.a,useClass:d.a,multi:!0}],imports:[[r.a,v]]}),a)}}]);