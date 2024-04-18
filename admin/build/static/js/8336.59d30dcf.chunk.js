"use strict";(self.webpackChunkadmin_plus=self.webpackChunkadmin_plus||[]).push([[8336],{68336:(e,t,n)=>{n.d(t,{T3:()=>k,tG:()=>W,pH:()=>B,ov:()=>H,zD:()=>U,g0:()=>j,Ay:()=>Z});var o=n(9950);const r=o.createContext(null);function s(e,t){if(e===t)return!0;if(!e||!t)return!1;if(Array.isArray(e)){if(!Array.isArray(t)||e.length!==t.length)return!1;for(let n=0;n<e.length;n++)if(!s(e[n],t[n]))return!1;return!0}if(Array.isArray(t))return!1;if("object"===typeof e&&"object"===typeof t){const n=Object.keys(e),o=Object.keys(t);if(n.length!==o.length)return!1;for(const r of n){if(!t.hasOwnProperty(r))return!1;if(!s(e[r],t[r]))return!1}return!0}return!1}function a(e,t){if(!e.getProjection)return;const n=e.getProjection();s(n,t.getProjection())||t.setProjection(n)}function i(e){return{longitude:e.center.lng,latitude:e.center.lat,zoom:e.zoom,pitch:e.pitch,bearing:e.bearing,padding:e.padding}}function c(e,t){const n=t.viewState||t;let o=!1;if("longitude"in n&&"latitude"in n){const t=e.center;e.center=new t.constructor(n.longitude,n.latitude),o=o||t!==e.center}if("zoom"in n){const t=e.zoom;e.zoom=n.zoom,o=o||t!==e.zoom}if("bearing"in n){const t=e.bearing;e.bearing=n.bearing,o=o||t!==e.bearing}if("pitch"in n){const t=e.pitch;e.pitch=n.pitch,o=o||t!==e.pitch}return n.padding&&!e.isPaddingEqual(n.padding)&&(o=!0,e.padding=n.padding),o}const l=["type","source","source-layer","minzoom","maxzoom","filter","layout"];function u(e){if(!e)return null;if("string"===typeof e)return e;if("toJS"in e&&(e=e.toJS()),!e.layers)return e;const t={};for(const o of e.layers)t[o.id]=o;const n=e.layers.map((e=>{let n=null;"interactive"in e&&(n=Object.assign({},e),delete n.interactive);const o=t[e.ref];if(o){n=n||Object.assign({},e),delete n.ref;for(const e of l)e in o&&(n[e]=o[e])}return n||e}));return{...e,layers:n}}const d={version:8,sources:{},layers:[]},p={mousedown:"onMouseDown",mouseup:"onMouseUp",mouseover:"onMouseOver",mousemove:"onMouseMove",click:"onClick",dblclick:"onDblClick",mouseenter:"onMouseEnter",mouseleave:"onMouseLeave",mouseout:"onMouseOut",contextmenu:"onContextMenu",touchstart:"onTouchStart",touchend:"onTouchEnd",touchmove:"onTouchMove",touchcancel:"onTouchCancel"},m={movestart:"onMoveStart",move:"onMove",moveend:"onMoveEnd",dragstart:"onDragStart",drag:"onDrag",dragend:"onDragEnd",zoomstart:"onZoomStart",zoom:"onZoom",zoomend:"onZoomEnd",rotatestart:"onRotateStart",rotate:"onRotate",rotateend:"onRotateEnd",pitchstart:"onPitchStart",pitch:"onPitch",pitchend:"onPitchEnd"},f={wheel:"onWheel",boxzoomstart:"onBoxZoomStart",boxzoomend:"onBoxZoomEnd",boxzoomcancel:"onBoxZoomCancel",resize:"onResize",load:"onLoad",render:"onRender",idle:"onIdle",remove:"onRemove",data:"onData",styledata:"onStyleData",sourcedata:"onSourceData",error:"onError"},_=["minZoom","maxZoom","minPitch","maxPitch","maxBounds","projection","renderWorldCopies"],h=["scrollZoom","boxZoom","dragRotate","dragPan","keyboard","doubleClickZoom","touchZoomRotate","touchPitch"];class g{constructor(e,t,n){this._map=null,this._internalUpdate=!1,this._inRender=!1,this._hoveredFeatures=null,this._deferredEvents={move:!1,zoom:!1,pitch:!1,rotate:!1},this._onEvent=e=>{const t=this.props[f[e.type]];t?t(e):"error"===e.type&&console.error(e.error)},this._onPointerEvent=e=>{"mousemove"!==e.type&&"mouseout"!==e.type||this._updateHover(e);const t=this.props[p[e.type]];t&&(this.props.interactiveLayerIds&&"mouseover"!==e.type&&"mouseout"!==e.type&&(e.features=this._hoveredFeatures||this._queryRenderedFeatures(e.point)),t(e),delete e.features)},this._onCameraEvent=e=>{if(!this._internalUpdate){const t=this.props[m[e.type]];t&&t(e)}e.type in this._deferredEvents&&(this._deferredEvents[e.type]=!1)},this._MapClass=e,this.props=t,this._initialize(n)}get map(){return this._map}get transform(){return this._renderTransform}setProps(e){const t=this.props;this.props=e;const n=this._updateSettings(e,t);n&&this._createShadowTransform(this._map);const o=this._updateSize(e),r=this._updateViewState(e,!0);this._updateStyle(e,t),this._updateStyleComponents(e,t),this._updateHandlers(e,t),(n||o||r&&!this._map.isMoving())&&this.redraw()}static reuse(e,t){const n=g.savedMaps.pop();if(!n)return null;const o=n.map,r=o.getContainer();for(t.className=r.className;r.childNodes.length>0;)t.appendChild(r.childNodes[0]);o._container=t;const s=o._resizeObserver;s&&(s.disconnect(),s.observe(t)),n.setProps({...e,styleDiffing:!1}),o.resize();const{initialViewState:a}=e;return a&&(a.bounds?o.fitBounds(a.bounds,{...a.fitBoundsOptions,duration:0}):n._updateViewState(a,!1)),o.isStyleLoaded()?o.fire("load"):o.once("styledata",(()=>o.fire("load"))),o._update(),n}_initialize(e){const{props:t}=this,{mapStyle:n=d}=t,o={...t,...t.initialViewState,accessToken:t.mapboxAccessToken||E()||null,container:e,style:u(n)},r=o.initialViewState||o.viewState||o;if(Object.assign(o,{center:[r.longitude||0,r.latitude||0],zoom:r.zoom||0,pitch:r.pitch||0,bearing:r.bearing||0}),t.gl){const e=HTMLCanvasElement.prototype.getContext;HTMLCanvasElement.prototype.getContext=()=>(HTMLCanvasElement.prototype.getContext=e,t.gl)}const s=new this._MapClass(o);r.padding&&s.setPadding(r.padding),t.cursor&&(s.getCanvas().style.cursor=t.cursor),this._createShadowTransform(s);const i=s._render;s._render=e=>{this._inRender=!0,i.call(s,e),this._inRender=!1};const c=s._renderTaskQueue.run;s._renderTaskQueue.run=e=>{c.call(s._renderTaskQueue,e),this._onBeforeRepaint()},s.on("render",(()=>this._onAfterRepaint()));const l=s.fire;s.fire=this._fireEvent.bind(this,l),s.on("resize",(()=>{this._renderTransform.resize(s.transform.width,s.transform.height)})),s.on("styledata",(()=>{this._updateStyleComponents(this.props,{}),a(s.transform,this._renderTransform)})),s.on("sourcedata",(()=>this._updateStyleComponents(this.props,{})));for(const a in p)s.on(a,this._onPointerEvent);for(const a in m)s.on(a,this._onCameraEvent);for(const a in f)s.on(a,this._onEvent);this._map=s}recycle(){const e=this.map.getContainer().querySelector("[mapboxgl-children]");null===e||void 0===e||e.remove(),g.savedMaps.push(this)}destroy(){this._map.remove()}redraw(){const e=this._map;!this._inRender&&e.style&&(e._frame&&(e._frame.cancel(),e._frame=null),e._render())}_createShadowTransform(e){const t=function(e){const t=e.clone();return t.pixelsToGLUnits=e.pixelsToGLUnits,t}(e.transform);e.painter.transform=t,this._renderTransform=t}_updateSize(e){const{viewState:t}=e;if(t){const e=this._map;if(t.width!==e.transform.width||t.height!==e.transform.height)return e.resize(),!0}return!1}_updateViewState(e,t){if(this._internalUpdate)return!1;const n=this._map,o=this._renderTransform,{zoom:r,pitch:s,bearing:a}=o,l=n.isMoving();l&&(o.cameraElevationReference="sea");const u=c(o,{...i(n.transform),...e});if(l&&(o.cameraElevationReference="ground"),u&&t){const e=this._deferredEvents;e.move=!0,e.zoom||(e.zoom=r!==o.zoom),e.rotate||(e.rotate=a!==o.bearing),e.pitch||(e.pitch=s!==o.pitch)}return l||c(n.transform,e),u}_updateSettings(e,t){const n=this._map;let o=!1;for(const r of _)if(r in e&&!s(e[r],t[r])){o=!0;const t=n["set".concat(r[0].toUpperCase()).concat(r.slice(1))];null===t||void 0===t||t.call(n,e[r])}return o}_updateStyle(e,t){if(e.cursor!==t.cursor&&(this._map.getCanvas().style.cursor=e.cursor||""),e.mapStyle!==t.mapStyle){const{mapStyle:t=d,styleDiffing:n=!0}=e,o={diff:n};return"localIdeographFontFamily"in e&&(o.localIdeographFontFamily=e.localIdeographFontFamily),this._map.setStyle(u(t),o),!0}return!1}_updateStyleComponents(e,t){const n=this._map;let o=!1;return n.isStyleLoaded()&&("light"in e&&n.setLight&&!s(e.light,t.light)&&(o=!0,n.setLight(e.light)),"fog"in e&&n.setFog&&!s(e.fog,t.fog)&&(o=!0,n.setFog(e.fog)),"terrain"in e&&n.setTerrain&&!s(e.terrain,t.terrain)&&(e.terrain&&!n.getSource(e.terrain.source)||(o=!0,n.setTerrain(e.terrain)))),o}_updateHandlers(e,t){var n,o;const r=this._map;let a=!1;for(const i of h){const c=null===(n=e[i])||void 0===n||n;s(c,null===(o=t[i])||void 0===o||o)||(a=!0,c?r[i].enable(c):r[i].disable())}return a}_queryRenderedFeatures(e){const t=this._map,n=t.transform,{interactiveLayerIds:o=[]}=this.props;try{return t.transform=this._renderTransform,t.queryRenderedFeatures(e,{layers:o.filter(t.getLayer.bind(t))})}catch(r){return[]}finally{t.transform=n}}_updateHover(e){var t;const{props:n}=this;if(n.interactiveLayerIds&&(n.onMouseMove||n.onMouseEnter||n.onMouseLeave)){const n=e.type,o=(null===(t=this._hoveredFeatures)||void 0===t?void 0:t.length)>0,r=this._queryRenderedFeatures(e.point),s=r.length>0;!s&&o&&(e.type="mouseleave",this._onPointerEvent(e)),this._hoveredFeatures=r,s&&!o&&(e.type="mouseenter",this._onPointerEvent(e)),e.type=n}else this._hoveredFeatures=null}_fireEvent(e,t,n){const o=this._map,r=o.transform,s="string"===typeof t?t:t.type;return"move"===s&&this._updateViewState(this.props,!1),s in m&&("object"===typeof t&&(t.viewState=i(r)),this._map.isMoving())?(o.transform=this._renderTransform,e.call(o,t,n),o.transform=r,o):(e.call(o,t,n),o)}_onBeforeRepaint(){const e=this._map;this._internalUpdate=!0;for(const n in this._deferredEvents)this._deferredEvents[n]&&e.fire(n);this._internalUpdate=!1;const t=this._map.transform;e.transform=this._renderTransform,this._onAfterRepaint=()=>{a(this._renderTransform,t),e.transform=t}}}function E(){let e=null;if("undefined"!==typeof location){const t=/access_token=([^&\/]*)/.exec(location.search);e=t&&t[1]}try{e=e||{NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_AUTH0_CLIENT_ID:"",REACT_APP_AUTH0_DOMAIN:"",REACT_APP_AWS_COGNITO_CLIENT_ID:"",REACT_APP_AWS_COGNITO_USER_POOL_ID:"",REACT_APP_FIREBASE_API_KEY:"",REACT_APP_FIREBASE_APPID:"",REACT_APP_FIREBASE_AUTH_DOMAIN:"",REACT_APP_FIREBASE_MEASUREMENT_ID:"",REACT_APP_FIREBASE_MESSAGING_SENDER_ID:"",REACT_APP_FIREBASE_PROJECT_ID:"",REACT_APP_FIREBASE_STORAGE_BUCKET:"",REACT_APP_HOST_API_KEY:"https://aqarbackend.revampbrands.com/api",REACT_APP_MAPBOX_API:""}.MapboxAccessToken}catch(t){}try{e=e||{NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_AUTH0_CLIENT_ID:"",REACT_APP_AUTH0_DOMAIN:"",REACT_APP_AWS_COGNITO_CLIENT_ID:"",REACT_APP_AWS_COGNITO_USER_POOL_ID:"",REACT_APP_FIREBASE_API_KEY:"",REACT_APP_FIREBASE_APPID:"",REACT_APP_FIREBASE_AUTH_DOMAIN:"",REACT_APP_FIREBASE_MEASUREMENT_ID:"",REACT_APP_FIREBASE_MESSAGING_SENDER_ID:"",REACT_APP_FIREBASE_PROJECT_ID:"",REACT_APP_FIREBASE_STORAGE_BUCKET:"",REACT_APP_HOST_API_KEY:"https://aqarbackend.revampbrands.com/api",REACT_APP_MAPBOX_API:""}.REACT_APP_MAPBOX_ACCESS_TOKEN}catch(n){}return e}g.savedMaps=[];const v=["setMaxBounds","setMinZoom","setMaxZoom","setMinPitch","setMaxPitch","setRenderWorldCopies","setProjection","setStyle","addSource","removeSource","addLayer","removeLayer","setLayerZoomRange","setFilter","setPaintProperty","setLayoutProperty","setLight","setTerrain","setFog","remove"];function y(e){if(!e)return null;const t=e.map,n={getMap:()=>t,getCenter:()=>e.transform.center,getZoom:()=>e.transform.zoom,getBearing:()=>e.transform.bearing,getPitch:()=>e.transform.pitch,getPadding:()=>e.transform.padding,getBounds:()=>e.transform.getBounds(),project:n=>{const o=t.transform;t.transform=e.transform;const r=t.project(n);return t.transform=o,r},unproject:n=>{const o=t.transform;t.transform=e.transform;const r=t.unproject(n);return t.transform=o,r},queryTerrainElevation:(n,o)=>{const r=t.transform;t.transform=e.transform;const s=t.queryTerrainElevation(n,o);return t.transform=r,s},queryRenderedFeatures:(n,o)=>{const r=t.transform;t.transform=e.transform;const s=t.queryRenderedFeatures(n,o);return t.transform=r,s}};for(const o of function(e){const t=new Set;let n=e;for(;n;){for(const o of Object.getOwnPropertyNames(n))"_"!==o[0]&&"function"===typeof e[o]&&"fire"!==o&&"setEventedParent"!==o&&t.add(o);n=Object.getPrototypeOf(n)}return Array.from(t)}(t))o in n||v.includes(o)||(n[o]=t[o].bind(t));return n}const A="undefined"!==typeof document?o.useLayoutEffect:o.useEffect,P=["baseApiUrl","maxParallelImageRequests","workerClass","workerCount","workerUrl"];const T=o.createContext(null);function S(e,t,n){const s=(0,o.useContext)(r),[a,i]=(0,o.useState)(null),c=(0,o.useRef)(),{current:l}=(0,o.useRef)({mapLib:null,map:null});(0,o.useEffect)((()=>{const t=e.mapLib;let o,r=!0;return Promise.resolve(t||n).then((t=>{if(!r)return;if(!t)throw new Error("Invalid mapLib");const n="Map"in t?t:t.default;if(!n.Map)throw new Error("Invalid mapLib");if(function(e,t){for(const o of P)o in t&&(e[o]=t[o]);const{RTLTextPlugin:n="https://api.mapbox.com/mapbox-gl-js/plugins/mapbox-gl-rtl-text/v0.2.3/mapbox-gl-rtl-text.js"}=t;n&&e.getRTLTextPluginStatus&&"unavailable"===e.getRTLTextPluginStatus()&&e.setRTLTextPlugin(n,(e=>{e&&console.error(e)}),!0)}(n,e),n.supported&&!n.supported(e))throw new Error("Map is not supported by this browser");e.reuseMaps&&(o=g.reuse(e,c.current)),o||(o=new g(n.Map,e,c.current)),l.map=y(o),l.mapLib=n,i(o),null===s||void 0===s||s.onMapMount(l.map,e.id)})).catch((t=>{const{onError:n}=e;n?n({type:"error",target:null,originalEvent:null,error:t}):console.error(t)})),()=>{r=!1,o&&(null===s||void 0===s||s.onMapUnmount(e.id),e.reuseMaps?o.recycle():o.destroy())}}),[]),A((()=>{a&&a.setProps(e)})),(0,o.useImperativeHandle)(t,(()=>l.map),[a]);const u=(0,o.useMemo)((()=>({position:"relative",width:"100%",height:"100%",...e.style})),[e.style]);return o.createElement("div",{id:e.id,ref:c,style:u},a&&o.createElement(T.Provider,{value:l},o.createElement("div",{"mapboxgl-children":"",style:{height:"100%"}},e.children)))}var C=n(17119);const R=/box|flex|grid|column|lineHeight|fontWeight|opacity|order|tabSize|zIndex/;function b(e,t){if(!e||!t)return;const n=e.style;for(const o in t){const e=t[o];Number.isFinite(e)&&!R.test(o)?n[o]="".concat(e,"px"):n[o]=e}}const L=(0,o.memo)((0,o.forwardRef)((function(e,t){const{map:n,mapLib:r}=(0,o.useContext)(T),s=(0,o.useRef)({props:e});s.current.props=e;const a=(0,o.useMemo)((()=>{let t=!1;o.Children.forEach(e.children,(e=>{e&&(t=!0)}));const n={...e,element:t?document.createElement("div"):null},i=new r.Marker(n);return i.setLngLat([e.longitude,e.latitude]),i.getElement().addEventListener("click",(e=>{var t,n;null===(n=(t=s.current.props).onClick)||void 0===n||n.call(t,{type:"click",target:i,originalEvent:e})})),i.on("dragstart",(e=>{var t,n;const o=e;o.lngLat=a.getLngLat(),null===(n=(t=s.current.props).onDragStart)||void 0===n||n.call(t,o)})),i.on("drag",(e=>{var t,n;const o=e;o.lngLat=a.getLngLat(),null===(n=(t=s.current.props).onDrag)||void 0===n||n.call(t,o)})),i.on("dragend",(e=>{var t,n;const o=e;o.lngLat=a.getLngLat(),null===(n=(t=s.current.props).onDragEnd)||void 0===n||n.call(t,o)})),i}),[]);(0,o.useEffect)((()=>(a.addTo(n.getMap()),()=>{a.remove()})),[]);const{longitude:i,latitude:c,offset:l,style:u,draggable:d=!1,popup:p=null,rotation:m=0,rotationAlignment:f="auto",pitchAlignment:_="auto"}=e;return(0,o.useEffect)((()=>{b(a.getElement(),u)}),[u]),(0,o.useImperativeHandle)(t,(()=>a),[]),a.getLngLat().lng===i&&a.getLngLat().lat===c||a.setLngLat([i,c]),l&&!function(e,t){const n=Array.isArray(e)?e[0]:e?e.x:0,o=Array.isArray(e)?e[1]:e?e.y:0,r=Array.isArray(t)?t[0]:t?t.x:0,s=Array.isArray(t)?t[1]:t?t.y:0;return n===r&&o===s}(a.getOffset(),l)&&a.setOffset(l),a.isDraggable()!==d&&a.setDraggable(d),a.getRotation()!==m&&a.setRotation(m),a.getRotationAlignment()!==f&&a.setRotationAlignment(f),a.getPitchAlignment()!==_&&a.setPitchAlignment(_),a.getPopup()!==p&&a.setPopup(p),(0,C.createPortal)(e.children,a.getElement())})));function I(e){return new Set(e?e.trim().split(/\s+/):[])}const M=(0,o.memo)((0,o.forwardRef)((function(e,t){const{map:n,mapLib:r}=(0,o.useContext)(T),a=(0,o.useMemo)((()=>document.createElement("div")),[]),i=(0,o.useRef)({props:e});i.current.props=e;const c=(0,o.useMemo)((()=>{const t={...e},n=new r.Popup(t);return n.setLngLat([e.longitude,e.latitude]),n.once("open",(e=>{var t,n;null===(n=(t=i.current.props).onOpen)||void 0===n||n.call(t,e)})),n}),[]);if((0,o.useEffect)((()=>{const e=e=>{var t,n;null===(n=(t=i.current.props).onClose)||void 0===n||n.call(t,e)};return c.on("close",e),c.setDOMContent(a).addTo(n.getMap()),()=>{c.off("close",e),c.isOpen()&&c.remove()}}),[]),(0,o.useEffect)((()=>{b(c.getElement(),e.style)}),[e.style]),(0,o.useImperativeHandle)(t,(()=>c),[]),c.isOpen()&&(c.getLngLat().lng===e.longitude&&c.getLngLat().lat===e.latitude||c.setLngLat([e.longitude,e.latitude]),e.offset&&!s(c.options.offset,e.offset)&&c.setOffset(e.offset),c.options.anchor===e.anchor&&c.options.maxWidth===e.maxWidth||(c.options.anchor=e.anchor,c.setMaxWidth(e.maxWidth)),c.options.className!==e.className)){const t=I(c.options.className),n=I(e.className);for(const e of t)n.has(e)||c.removeClassName(e);for(const e of n)t.has(e)||c.addClassName(e);c.options.className=e.className}return(0,C.createPortal)(e.children,a)})));const O=function(e,t,n,r){const s=(0,o.useContext)(T),a=(0,o.useMemo)((()=>e(s)),[]);return(0,o.useEffect)((()=>{const e=r||n||t,o="function"===typeof t&&"function"===typeof n?t:null,i="function"===typeof n?n:"function"===typeof t?t:null,{map:c}=s;return c.hasControl(a)||(c.addControl(a,null===e||void 0===e?void 0:e.position),o&&o(s)),()=>{i&&i(s),c.hasControl(a)&&c.removeControl(a)}}),[]),a};(0,o.memo)((function(e){const t=O((t=>{let{mapLib:n}=t;return new n.AttributionControl(e)}),{position:e.position});return(0,o.useEffect)((()=>{b(t._container,e.style)}),[e.style]),null}));const x=(0,o.memo)((function(e){const t=O((t=>{let{mapLib:n}=t;return new n.FullscreenControl({container:e.containerId&&document.getElementById(e.containerId)})}),{position:e.position});return(0,o.useEffect)((()=>{b(t._controlContainer,e.style)}),[e.style]),null}));const w=(0,o.memo)((0,o.forwardRef)((function(e,t){const n=(0,o.useRef)({props:e}),r=O((t=>{let{mapLib:o}=t;const r=new o.GeolocateControl(e),s=r._setupUI;return r._setupUI=e=>{r._container.hasChildNodes()||s(e)},r.on("geolocate",(e=>{var t,o;null===(o=(t=n.current.props).onGeolocate)||void 0===o||o.call(t,e)})),r.on("error",(e=>{var t,o;null===(o=(t=n.current.props).onError)||void 0===o||o.call(t,e)})),r.on("outofmaxbounds",(e=>{var t,o;null===(o=(t=n.current.props).onOutOfMaxBounds)||void 0===o||o.call(t,e)})),r.on("trackuserlocationstart",(e=>{var t,o;null===(o=(t=n.current.props).onTrackUserLocationStart)||void 0===o||o.call(t,e)})),r.on("trackuserlocationend",(e=>{var t,o;null===(o=(t=n.current.props).onTrackUserLocationEnd)||void 0===o||o.call(t,e)})),r}),{position:e.position});return n.current.props=e,(0,o.useImperativeHandle)(t,(()=>r),[]),(0,o.useEffect)((()=>{b(r._container,e.style)}),[e.style]),null})));const D=(0,o.memo)((function(e){const t=O((t=>{let{mapLib:n}=t;return new n.NavigationControl(e)}),{position:e.position});return(0,o.useEffect)((()=>{b(t._container,e.style)}),[e.style]),null}));const F=(0,o.memo)((function(e){const t=O((t=>{let{mapLib:n}=t;return new n.ScaleControl(e)}),{position:e.position}),n=(0,o.useRef)(e),r=n.current;n.current=e;const{style:s}=e;return void 0!==e.maxWidth&&e.maxWidth!==r.maxWidth&&(t.options.maxWidth=e.maxWidth),void 0!==e.unit&&e.unit!==r.unit&&t.setUnit(e.unit),(0,o.useEffect)((()=>{b(t._container,s)}),[s]),null}));const N=Promise.resolve().then(n.t.bind(n,40932,23)),z=o.forwardRef((function(e,t){return S(e,t,N)})),B=L,U=M,k=x,H=D,W=w,j=F,Z=z}}]);