var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
var NAMESPACE = 'component';
var queueCongestion = 0;
var queuePending = false;
var isSvgMode = false;
var win = typeof window !== 'undefined' ? window : {};
var doc = win.document || { head: {} };
var plt = {
    $flags$: 0,
    $resourcesUrl$: '',
    jmp: function (h) { return h(); },
    raf: function (h) { return requestAnimationFrame(h); },
    ael: function (el, eventName, listener, opts) { return el.addEventListener(eventName, listener, opts); },
    rel: function (el, eventName, listener, opts) { return el.removeEventListener(eventName, listener, opts); },
};
var supportsConstructibleStylesheets = /*@__PURE__*/ (function () {
    try {
        new CSSStyleSheet();
        return true;
    }
    catch (e) { }
    return false;
})();
var hostRefs = new WeakMap();
var getHostRef = function (ref) { return hostRefs.get(ref); };
var registerInstance = function (lazyInstance, hostRef) { return hostRefs.set(hostRef.$lazyInstance$ = lazyInstance, hostRef); };
var registerHost = function (elm) {
    var hostRef = {
        $flags$: 0,
        $hostElement$: elm,
        $instanceValues$: new Map()
    };
    {
        hostRef.$onReadyPromise$ = new Promise(function (r) { return hostRef.$onReadyResolve$ = r; });
        elm['s-p'] = [];
        elm['s-rc'] = [];
    }
    return hostRefs.set(elm, hostRef);
};
var isMemberInElement = function (elm, memberName) { return memberName in elm; };
var consoleError = function (e) { return console.error(e); };
var moduleCache = /*@__PURE__*/ new Map();
var loadModule = function (cmpMeta, hostRef, hmrVersionId) {
    // loadModuleImport
    var exportName = cmpMeta.$tagName$.replace(/-/g, '_');
    var bundleId = (cmpMeta.$lazyBundleIds$);
    var module = moduleCache.get(bundleId);
    if (module) {
        return module[exportName];
    }
    return import(
    /* webpackInclude: /\.entry\.js$/ */
    /* webpackExclude: /\.system\.entry\.js$/ */
    /* webpackMode: "lazy" */
    "./" + bundleId + ".entry.js" + '').then(function (importedModule) {
        {
            moduleCache.set(bundleId, importedModule);
        }
        return importedModule[exportName];
    }, consoleError);
};
var styles = new Map();
var queueDomReads = [];
var queueDomWrites = [];
var queueDomWritesLow = [];
var queueTask = function (queue, write) { return function (cb) {
    queue.push(cb);
    if (!queuePending) {
        queuePending = true;
        if (write && plt.$flags$ & 4 /* queueSync */) {
            nextTick(flush);
        }
        else {
            plt.raf(flush);
        }
    }
}; };
var consume = function (queue) {
    for (var i = 0; i < queue.length; i++) {
        try {
            queue[i](performance.now());
        }
        catch (e) {
            consoleError(e);
        }
    }
    queue.length = 0;
};
var consumeTimeout = function (queue, timeout) {
    var i = 0;
    var ts = 0;
    while (i < queue.length && (ts = performance.now()) < timeout) {
        try {
            queue[i++](ts);
        }
        catch (e) {
            consoleError(e);
        }
    }
    if (i === queue.length) {
        queue.length = 0;
    }
    else if (i !== 0) {
        queue.splice(0, i);
    }
};
var flush = function () {
    queueCongestion++;
    // always force a bunch of medium callbacks to run, but still have
    // a throttle on how many can run in a certain time
    // DOM READS!!!
    consume(queueDomReads);
    var timeout = (plt.$flags$ & 6 /* queueMask */) === 2 /* appLoaded */
        ? performance.now() + (10 * Math.ceil(queueCongestion * (1.0 / 22.0)))
        : Infinity;
    // DOM WRITES!!!
    consumeTimeout(queueDomWrites, timeout);
    consumeTimeout(queueDomWritesLow, timeout);
    if (queueDomWrites.length > 0) {
        queueDomWritesLow.push.apply(queueDomWritesLow, queueDomWrites);
        queueDomWrites.length = 0;
    }
    if (queuePending = ((queueDomReads.length + queueDomWrites.length + queueDomWritesLow.length) > 0)) {
        // still more to do yet, but we've run out of time
        // let's let this thing cool off and try again in the next tick
        plt.raf(flush);
    }
    else {
        queueCongestion = 0;
    }
};
var nextTick = /*@__PURE__*/ function (cb) { return Promise.resolve().then(cb); };
var writeTask = /*@__PURE__*/ queueTask(queueDomWrites, true);
/**
 * Default style mode id
 */
/**
 * Reusable empty obj/array
 * Don't add values to these!!
 */
var EMPTY_OBJ = {};
var isComplexType = function (o) {
    // https://jsperf.com/typeof-fn-object/5
    o = typeof o;
    return o === 'object' || o === 'function';
};
var getDynamicImportFunction = function (namespace) {
    return "__sc_import_" + namespace.replace(/\s|-/g, '_');
};
var patchEsm = function () {
    // @ts-ignore
    if (!(win.CSS && win.CSS.supports && win.CSS.supports('color', 'var(--c)'))) {
        // @ts-ignore
        return import('./css-shim-6aaf713d-9b13816a.js').then(function () {
            plt.$cssShim$ = win.__stencil_cssshim;
            if (plt.$cssShim$) {
                return plt.$cssShim$.initShim();
            }
        });
    }
    return Promise.resolve();
};
var patchBrowser = function () {
    {
        // shim css vars
        plt.$cssShim$ = win.__stencil_cssshim;
    }
    // @ts-ignore
    var scriptElm = Array.from(doc.querySelectorAll('script')).find(function (s) { return (new RegExp("/" + NAMESPACE + "(\\.esm)?\\.js($|\\?|#)").test(s.src) ||
        s.getAttribute('data-stencil-namespace') === NAMESPACE); });
    var opts = scriptElm['data-opts'] || {};
    var importMeta = "";
    if ('onbeforeload' in scriptElm && !history.scrollRestoration && false /* IS_SYSTEM_JS_BUILD */) {
        // Safari < v11 support: This IF is true if it's Safari below v11.
        // This fn cannot use async/await since Safari didn't support it until v11,
        // however, Safari 10 did support modules. Safari 10 also didn't support "nomodule",
        // so both the ESM file and nomodule file would get downloaded. Only Safari
        // has 'onbeforeload' in the script, and "history.scrollRestoration" was added
        // to Safari in v11. Return a noop then() so the async/await ESM code doesn't continue.
        // IS_ESM_BUILD is replaced at build time so this check doesn't happen in systemjs builds.
        return { then: function () { } };
    }
    if (importMeta !== '') {
        opts.resourcesUrl = new URL('.', importMeta).href;
    }
    else {
        opts.resourcesUrl = new URL('.', new URL(scriptElm.getAttribute('data-resources-url') || scriptElm.src, win.location.href)).href;
        patchDynamicImport(opts.resourcesUrl, scriptElm);
        if (!window.customElements) {
            // module support, but no custom elements support (Old Edge)
            // @ts-ignore
            return import('./dom-76cc7c7d-0a082895.js').then(function () { return opts; });
        }
    }
    return Promise.resolve(opts);
};
var patchDynamicImport = function (base, orgScriptElm) {
    var importFunctionName = getDynamicImportFunction(NAMESPACE);
    try {
        // test if this browser supports dynamic imports
        // There is a caching issue in V8, that breaks using import() in Function
        // By generating a random string, we can workaround it
        // Check https://bugs.chromium.org/p/v8/issues/detail?id=9558 for more info
        win[importFunctionName] = new Function('w', "return import(w);//" + Math.random());
    }
    catch (e) {
        // this shim is specifically for browsers that do support "esm" imports
        // however, they do NOT support "dynamic" imports
        // basically this code is for old Edge, v18 and below
        var moduleMap_1 = new Map();
        win[importFunctionName] = function (src) {
            var url = new URL(src, base).href;
            var mod = moduleMap_1.get(url);
            if (!mod) {
                var script_1 = doc.createElement('script');
                script_1.type = 'module';
                script_1.crossOrigin = orgScriptElm.crossOrigin;
                script_1.src = URL.createObjectURL(new Blob(["import * as m from '" + url + "'; window." + importFunctionName + ".m = m;"], { type: 'application/javascript' }));
                mod = new Promise(function (resolve) {
                    script_1.onload = function () {
                        resolve(win[importFunctionName].m);
                        script_1.remove();
                    };
                });
                moduleMap_1.set(url, mod);
                doc.head.appendChild(script_1);
            }
            return mod;
        };
    }
};
var HYDRATED_CLASS = 'hydrated';
var createTime = function (fnName, tagName) {
    if (tagName === void 0) { tagName = ''; }
    {
        return function () { return; };
    }
};
var uniqueTime = function (key, measureText) {
    {
        return function () { return; };
    }
};
var rootAppliedStyles = new WeakMap();
var registerStyle = function (scopeId, cssText, allowCS) {
    var style = styles.get(scopeId);
    if (supportsConstructibleStylesheets && allowCS) {
        style = (style || new CSSStyleSheet());
        style.replace(cssText);
    }
    else {
        style = cssText;
    }
    styles.set(scopeId, style);
};
var addStyle = function (styleContainerNode, cmpMeta, mode, hostElm) {
    var scopeId = getScopeId(cmpMeta.$tagName$);
    var style = styles.get(scopeId);
    // if an element is NOT connected then getRootNode() will return the wrong root node
    // so the fallback is to always use the document for the root node in those cases
    styleContainerNode = (styleContainerNode.nodeType === 11 /* DocumentFragment */ ? styleContainerNode : doc);
    if (style) {
        if (typeof style === 'string') {
            styleContainerNode = styleContainerNode.head || styleContainerNode;
            var appliedStyles = rootAppliedStyles.get(styleContainerNode);
            var styleElm = void 0;
            if (!appliedStyles) {
                rootAppliedStyles.set(styleContainerNode, appliedStyles = new Set());
            }
            if (!appliedStyles.has(scopeId)) {
                {
                    if (plt.$cssShim$) {
                        styleElm = plt.$cssShim$.createHostStyle(hostElm, scopeId, style, !!(cmpMeta.$flags$ & 10 /* needsScopedEncapsulation */));
                        var newScopeId = styleElm['s-sc'];
                        if (newScopeId) {
                            scopeId = newScopeId;
                            // we don't want to add this styleID to the appliedStyles Set
                            // since the cssVarShim might need to apply several different
                            // stylesheets for the same component
                            appliedStyles = null;
                        }
                    }
                    else {
                        styleElm = doc.createElement('style');
                        styleElm.innerHTML = style;
                    }
                    styleContainerNode.insertBefore(styleElm, styleContainerNode.querySelector('link'));
                }
                if (appliedStyles) {
                    appliedStyles.add(scopeId);
                }
            }
        }
        else if (!styleContainerNode.adoptedStyleSheets.includes(style)) {
            styleContainerNode.adoptedStyleSheets = __spreadArrays(styleContainerNode.adoptedStyleSheets, [
                style
            ]);
        }
    }
    return scopeId;
};
var attachStyles = function (elm, cmpMeta, mode) {
    var endAttachStyles = createTime('attachStyles', cmpMeta.$tagName$);
    var scopeId = addStyle(elm.getRootNode(), cmpMeta, mode, elm);
    endAttachStyles();
};
var getScopeId = function (tagName, mode) { return 'sc-' + (tagName); };
/**
 * Production h() function based on Preact by
 * Jason Miller (@developit)
 * Licensed under the MIT License
 * https://github.com/developit/preact/blob/master/LICENSE
 *
 * Modified for Stencil's compiler and vdom
 */
// const stack: any[] = [];
// export function h(nodeName: string | d.FunctionalComponent, vnodeData: d.PropsType, child?: d.ChildType): d.VNode;
// export function h(nodeName: string | d.FunctionalComponent, vnodeData: d.PropsType, ...children: d.ChildType[]): d.VNode;
var h = function (nodeName, vnodeData) {
    var children = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        children[_i - 2] = arguments[_i];
    }
    var child = null;
    var simple = false;
    var lastSimple = false;
    var vNodeChildren = [];
    var walk = function (c) {
        for (var i = 0; i < c.length; i++) {
            child = c[i];
            if (Array.isArray(child)) {
                walk(child);
            }
            else if (child != null && typeof child !== 'boolean') {
                if (simple = typeof nodeName !== 'function' && !isComplexType(child)) {
                    child = String(child);
                }
                if (simple && lastSimple) {
                    // If the previous child was simple (string), we merge both
                    vNodeChildren[vNodeChildren.length - 1].$text$ += child;
                }
                else {
                    // Append a new vNode, if it's text, we create a text vNode
                    vNodeChildren.push(simple ? newVNode(null, child) : child);
                }
                lastSimple = simple;
            }
        }
    };
    walk(children);
    if (vnodeData) {
        {
            var classData_1 = vnodeData.className || vnodeData.class;
            if (classData_1) {
                vnodeData.class = typeof classData_1 !== 'object'
                    ? classData_1
                    : Object.keys(classData_1)
                        .filter(function (k) { return classData_1[k]; })
                        .join(' ');
            }
        }
    }
    var vnode = newVNode(nodeName, null);
    vnode.$attrs$ = vnodeData;
    if (vNodeChildren.length > 0) {
        vnode.$children$ = vNodeChildren;
    }
    return vnode;
};
var newVNode = function (tag, text) {
    var vnode = {
        $flags$: 0,
        $tag$: tag,
        $text$: text,
        $elm$: null,
        $children$: null
    };
    {
        vnode.$attrs$ = null;
    }
    return vnode;
};
var Host = {};
var isHost = function (node) { return node && node.$tag$ === Host; };
/**
 * Production setAccessor() function based on Preact by
 * Jason Miller (@developit)
 * Licensed under the MIT License
 * https://github.com/developit/preact/blob/master/LICENSE
 *
 * Modified for Stencil's compiler and vdom
 */
var setAccessor = function (elm, memberName, oldValue, newValue, isSvg, flags) {
    if (oldValue === newValue) {
        return;
    }
    var isProp = isMemberInElement(elm, memberName);
    var ln = memberName.toLowerCase();
    if (memberName === 'class') {
        var classList = elm.classList;
        var oldClasses_1 = parseClassList(oldValue);
        var newClasses_1 = parseClassList(newValue);
        classList.remove.apply(classList, oldClasses_1.filter(function (c) { return c && !newClasses_1.includes(c); }));
        classList.add.apply(classList, newClasses_1.filter(function (c) { return c && !oldClasses_1.includes(c); }));
    }
    else {
        // Set property if it exists and it's not a SVG
        var isComplex = isComplexType(newValue);
        if ((isProp || (isComplex && newValue !== null)) && !isSvg) {
            try {
                if (!elm.tagName.includes('-')) {
                    var n = newValue == null ? '' : newValue;
                    // Workaround for Safari, moving the <input> caret when re-assigning the same valued
                    if (memberName === 'list') {
                        isProp = false;
                        // tslint:disable-next-line: triple-equals
                    }
                    else if (oldValue == null || elm[memberName] != n) {
                        elm[memberName] = n;
                    }
                }
                else {
                    elm[memberName] = newValue;
                }
            }
            catch (e) { }
        }
        if (newValue == null || newValue === false) {
            {
                elm.removeAttribute(memberName);
            }
        }
        else if ((!isProp || (flags & 4 /* isHost */) || isSvg) && !isComplex) {
            newValue = newValue === true ? '' : newValue;
            {
                elm.setAttribute(memberName, newValue);
            }
        }
    }
};
var parseClassListRegex = /\s/;
var parseClassList = function (value) { return (!value) ? [] : value.split(parseClassListRegex); };
var updateElement = function (oldVnode, newVnode, isSvgMode, memberName) {
    // if the element passed in is a shadow root, which is a document fragment
    // then we want to be adding attrs/props to the shadow root's "host" element
    // if it's not a shadow root, then we add attrs/props to the same element
    var elm = (newVnode.$elm$.nodeType === 11 /* DocumentFragment */ && newVnode.$elm$.host) ? newVnode.$elm$.host : newVnode.$elm$;
    var oldVnodeAttrs = (oldVnode && oldVnode.$attrs$) || EMPTY_OBJ;
    var newVnodeAttrs = newVnode.$attrs$ || EMPTY_OBJ;
    // add new & update changed attributes
    for (memberName in newVnodeAttrs) {
        setAccessor(elm, memberName, oldVnodeAttrs[memberName], newVnodeAttrs[memberName], isSvgMode, newVnode.$flags$);
    }
};
var createElm = function (oldParentVNode, newParentVNode, childIndex, parentElm) {
    // tslint:disable-next-line: prefer-const
    var newVNode = newParentVNode.$children$[childIndex];
    var i = 0;
    var elm;
    var childNode;
    if (newVNode.$text$ !== null) {
        // create text node
        elm = newVNode.$elm$ = doc.createTextNode(newVNode.$text$);
    }
    else {
        // create element
        elm = newVNode.$elm$ = (doc.createElement(newVNode.$tag$));
        // add css classes, attrs, props, listeners, etc.
        {
            updateElement(null, newVNode, isSvgMode);
        }
        if (newVNode.$children$) {
            for (i = 0; i < newVNode.$children$.length; ++i) {
                // create the node
                childNode = createElm(oldParentVNode, newVNode, i);
                // return node could have been null
                if (childNode) {
                    // append our new node
                    elm.appendChild(childNode);
                }
            }
        }
    }
    return elm;
};
var addVnodes = function (parentElm, before, parentVNode, vnodes, startIdx, endIdx) {
    var containerElm = (parentElm);
    var childNode;
    for (; startIdx <= endIdx; ++startIdx) {
        if (vnodes[startIdx]) {
            childNode = createElm(null, parentVNode, startIdx);
            if (childNode) {
                vnodes[startIdx].$elm$ = childNode;
                containerElm.insertBefore(childNode, before);
            }
        }
    }
};
var patch = function (oldVNode, newVNode) {
    var elm = newVNode.$elm$ = oldVNode.$elm$;
    var newChildren = newVNode.$children$;
    if (newVNode.$text$ === null) {
        // element node
        {
            {
                // either this is the first render of an element OR it's an update
                // AND we already know it's possible it could have changed
                // this updates the element's css classes, attrs, props, listeners, etc.
                updateElement(oldVNode, newVNode, isSvgMode);
            }
        }
        if (newChildren !== null) {
            // add the new vnode children
            addVnodes(elm, null, newVNode, newChildren, 0, newChildren.length - 1);
        }
    }
    else if (oldVNode.$text$ !== newVNode.$text$) {
        // update the text content for the text only vnode
        // and also only if the text is different than before
        elm.data = newVNode.$text$;
    }
};
var renderVdom = function (hostElm, hostRef, cmpMeta, renderFnResults) {
    var oldVNode = hostRef.$vnode$ || newVNode(null, null);
    var rootVnode = isHost(renderFnResults)
        ? renderFnResults
        : h(null, null, renderFnResults);
    rootVnode.$tag$ = null;
    rootVnode.$flags$ |= 4 /* isHost */;
    hostRef.$vnode$ = rootVnode;
    rootVnode.$elm$ = oldVNode.$elm$ = (hostElm);
    // synchronous patch
    patch(oldVNode, rootVnode);
};
var attachToAncestor = function (hostRef, ancestorComponent) {
    if (ancestorComponent && !hostRef.$onRenderResolve$) {
        ancestorComponent['s-p'].push(new Promise(function (r) { return hostRef.$onRenderResolve$ = r; }));
    }
};
var scheduleUpdate = function (elm, hostRef, cmpMeta, isInitialLoad) {
    if (hostRef.$flags$ & 4 /* isWaitingForChildren */) {
        hostRef.$flags$ |= 512 /* needsRerender */;
        return;
    }
    var endSchedule = createTime('scheduleUpdate', cmpMeta.$tagName$);
    var ancestorComponent = hostRef.$ancestorComponent$;
    var instance = hostRef.$lazyInstance$;
    var update = function () { return updateComponent(elm, hostRef, cmpMeta, instance, isInitialLoad); };
    attachToAncestor(hostRef, ancestorComponent);
    var promise;
    endSchedule();
    // there is no ancestorc omponent or the ancestor component
    // has already fired off its lifecycle update then
    // fire off the initial update
    return then(promise, function () { return writeTask(update); });
};
var updateComponent = function (elm, hostRef, cmpMeta, instance, isInitialLoad) {
    // updateComponent
    var endUpdate = createTime('update', cmpMeta.$tagName$);
    var rc = elm['s-rc'];
    if (isInitialLoad) {
        // DOM WRITE!
        attachStyles(elm, cmpMeta, hostRef.$modeName$);
    }
    var endRender = createTime('render', cmpMeta.$tagName$);
    {
        {
            // looks like we've got child nodes to render into this host element
            // or we need to update the css class/attrs on the host element
            // DOM WRITE!
            renderVdom(elm, hostRef, cmpMeta, callRender(instance));
        }
    }
    if (plt.$cssShim$) {
        plt.$cssShim$.updateHost(elm);
    }
    {
        hostRef.$flags$ |= 2 /* hasRendered */;
    }
    if (rc) {
        // ok, so turns out there are some child host elements
        // waiting on this parent element to load
        // let's fire off all update callbacks waiting
        rc.forEach(function (cb) { return cb(); });
        elm['s-rc'] = undefined;
    }
    endRender();
    endUpdate();
    {
        var childrenPromises = elm['s-p'];
        var postUpdate = function () { return postUpdateComponent(elm, hostRef, cmpMeta); };
        if (childrenPromises.length === 0) {
            postUpdate();
        }
        else {
            Promise.all(childrenPromises).then(postUpdate);
            hostRef.$flags$ |= 4 /* isWaitingForChildren */;
            childrenPromises.length = 0;
        }
    }
};
var callRender = function (instance, elm) {
    try {
        instance = instance.render();
    }
    catch (e) {
        consoleError(e);
    }
    return instance;
};
var postUpdateComponent = function (elm, hostRef, cmpMeta) {
    var endPostUpdate = createTime('postUpdate', cmpMeta.$tagName$);
    var ancestorComponent = hostRef.$ancestorComponent$;
    if (!(hostRef.$flags$ & 64 /* hasLoadedComponent */)) {
        hostRef.$flags$ |= 64 /* hasLoadedComponent */;
        {
            // DOM WRITE!
            // add the css class that this element has officially hydrated
            elm.classList.add(HYDRATED_CLASS);
        }
        endPostUpdate();
        {
            hostRef.$onReadyResolve$(elm);
            if (!ancestorComponent) {
                appDidLoad();
            }
        }
    }
    else {
        endPostUpdate();
    }
    // load events fire from bottom to top
    // the deepest elements load first then bubbles up
    {
        if (hostRef.$onRenderResolve$) {
            hostRef.$onRenderResolve$();
            hostRef.$onRenderResolve$ = undefined;
        }
        if (hostRef.$flags$ & 512 /* needsRerender */) {
            nextTick(function () { return scheduleUpdate(elm, hostRef, cmpMeta, false); });
        }
        hostRef.$flags$ &= ~(4 /* isWaitingForChildren */ | 512 /* needsRerender */);
    }
    // ( •_•)
    // ( •_•)>⌐■-■
    // (⌐■_■)
};
var appDidLoad = function (who) {
    // on appload
    // we have finish the first big initial render
    {
        doc.documentElement.classList.add(HYDRATED_CLASS);
    }
    {
        plt.$flags$ |= 2 /* appLoaded */;
    }
};
var then = function (promise, thenFn) {
    return promise && promise.then ? promise.then(thenFn) : thenFn();
};
var proxyComponent = function (Cstr, cmpMeta, flags) {
    return Cstr;
};
var initializeComponent = function (elm, hostRef, cmpMeta, hmrVersionId, Cstr) { return __awaiter(void 0, void 0, void 0, function () {
    var endLoad, endNewInstance, scopeId, endRegisterStyles, style, ancestorComponent, schedule;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (!((hostRef.$flags$ & 32 /* hasInitializedComponent */) === 0)) return [3 /*break*/, 3];
                // we haven't initialized this element yet
                hostRef.$flags$ |= 32 /* hasInitializedComponent */;
                // lazy loaded components
                // request the component's implementation to be
                // wired up with the host element
                Cstr = loadModule(cmpMeta);
                if (!Cstr.then) return [3 /*break*/, 2];
                endLoad = uniqueTime();
                return [4 /*yield*/, Cstr];
            case 1:
                Cstr = _a.sent();
                endLoad();
                _a.label = 2;
            case 2:
                endNewInstance = createTime('createInstance', cmpMeta.$tagName$);
                // construct the lazy-loaded component implementation
                // passing the hostRef is very important during
                // construction in order to directly wire together the
                // host element and the lazy-loaded instance
                try {
                    new Cstr(hostRef);
                }
                catch (e) {
                    consoleError(e);
                }
                endNewInstance();
                scopeId = getScopeId(cmpMeta.$tagName$);
                if (!styles.has(scopeId) && Cstr.style) {
                    endRegisterStyles = createTime('registerStyles', cmpMeta.$tagName$);
                    style = Cstr.style;
                    registerStyle(scopeId, style, !!(cmpMeta.$flags$ & 1 /* shadowDomEncapsulation */));
                    endRegisterStyles();
                }
                _a.label = 3;
            case 3:
                ancestorComponent = hostRef.$ancestorComponent$;
                schedule = function () { return scheduleUpdate(elm, hostRef, cmpMeta, true); };
                if (ancestorComponent && ancestorComponent['s-rc']) {
                    // this is the intial load and this component it has an ancestor component
                    // but the ancestor component has NOT fired its will update lifecycle yet
                    // so let's just cool our jets and wait for the ancestor to continue first
                    // this will get fired off when the ancestor component
                    // finally gets around to rendering its lazy self
                    // fire off the initial update
                    ancestorComponent['s-rc'].push(schedule);
                }
                else {
                    schedule();
                }
                return [2 /*return*/];
        }
    });
}); };
var connectedCallback = function (elm, cmpMeta) {
    if ((plt.$flags$ & 1 /* isTmpDisconnected */) === 0) {
        var endConnected = createTime('connectedCallback', cmpMeta.$tagName$);
        // connectedCallback
        var hostRef_1 = getHostRef(elm);
        if (!(hostRef_1.$flags$ & 1 /* hasConnected */)) {
            // first time this component has connected
            hostRef_1.$flags$ |= 1 /* hasConnected */;
            {
                // find the first ancestor component (if there is one) and register
                // this component as one of the actively loading child components for its ancestor
                var ancestorComponent = elm;
                while ((ancestorComponent = (ancestorComponent.parentNode || ancestorComponent.host))) {
                    // climb up the ancestors looking for the first
                    // component that hasn't finished its lifecycle update yet
                    if ((ancestorComponent['s-p'])) {
                        // we found this components first ancestor component
                        // keep a reference to this component's ancestor component
                        attachToAncestor(hostRef_1, (hostRef_1.$ancestorComponent$ = ancestorComponent));
                        break;
                    }
                }
            }
            {
                // connectedCallback, taskQueue, initialLoad
                // angular sets attribute AFTER connectCallback
                // https://github.com/angular/angular/issues/18909
                // https://github.com/angular/angular/issues/19940
                nextTick(function () { return initializeComponent(elm, hostRef_1, cmpMeta); });
            }
        }
        endConnected();
    }
};
var disconnectedCallback = function (elm) {
    if ((plt.$flags$ & 1 /* isTmpDisconnected */) === 0) {
        var hostRef = getHostRef(elm);
        // clear CSS var-shim tracking
        if (plt.$cssShim$) {
            plt.$cssShim$.removeHost(elm);
        }
    }
};
var bootstrapLazy = function (lazyBundles, options) {
    if (options === void 0) { options = {}; }
    var endBootstrap = createTime();
    var cmpTags = [];
    var exclude = options.exclude || [];
    var head = doc.head;
    var customElements = win.customElements;
    var y = /*@__PURE__*/ head.querySelector('meta[charset]');
    var visibilityStyle = /*@__PURE__*/ doc.createElement('style');
    var deferredConnectedCallbacks = [];
    var appLoadFallback;
    var isBootstrapping = true;
    Object.assign(plt, options);
    plt.$resourcesUrl$ = new URL(options.resourcesUrl || './', doc.baseURI).href;
    if (options.syncQueue) {
        plt.$flags$ |= 4 /* queueSync */;
    }
    lazyBundles.forEach(function (lazyBundle) { return lazyBundle[1].forEach(function (compactMeta) {
        var cmpMeta = {
            $flags$: compactMeta[0],
            $tagName$: compactMeta[1],
            $members$: compactMeta[2],
            $listeners$: compactMeta[3],
        };
        var tagName = cmpMeta.$tagName$;
        var HostElement = /** @class */ (function (_super) {
            __extends(HostElement, _super);
            // StencilLazyHost
            function HostElement(self) {
                var _this = 
                // @ts-ignore
                _super.call(this, self) || this;
                self = _this;
                registerHost(self);
                return _this;
            }
            HostElement.prototype.connectedCallback = function () {
                var _this = this;
                if (appLoadFallback) {
                    clearTimeout(appLoadFallback);
                    appLoadFallback = null;
                }
                if (isBootstrapping) {
                    // connectedCallback will be processed once all components have been registered
                    deferredConnectedCallbacks.push(this);
                }
                else {
                    plt.jmp(function () { return connectedCallback(_this, cmpMeta); });
                }
            };
            HostElement.prototype.disconnectedCallback = function () {
                var _this = this;
                plt.jmp(function () { return disconnectedCallback(_this); });
            };
            HostElement.prototype.forceUpdate = function () {
            };
            HostElement.prototype.componentOnReady = function () {
                return getHostRef(this).$onReadyPromise$;
            };
            return HostElement;
        }(HTMLElement));
        cmpMeta.$lazyBundleIds$ = lazyBundle[0];
        if (!exclude.includes(tagName) && !customElements.get(tagName)) {
            cmpTags.push(tagName);
            customElements.define(tagName, proxyComponent(HostElement));
        }
    }); });
    // visibilityStyle.innerHTML = cmpTags.map(t => `${t}:not(.hydrated)`) + '{display:none}';
    visibilityStyle.innerHTML = cmpTags + '{visibility:hidden}.hydrated{visibility:inherit}';
    visibilityStyle.setAttribute('data-styles', '');
    head.insertBefore(visibilityStyle, y ? y.nextSibling : head.firstChild);
    // Process deferred connectedCallbacks now all components have been registered
    isBootstrapping = false;
    if (deferredConnectedCallbacks.length > 0) {
        deferredConnectedCallbacks.forEach(function (host) { return host.connectedCallback(); });
    }
    else {
        plt.jmp(function () { return appLoadFallback = setTimeout(appDidLoad, 30, 'timeout'); });
    }
    // Fallback appLoad event
    endBootstrap();
};
export { Host as H, patchEsm as a, bootstrapLazy as b, h, patchBrowser as p, registerInstance as r };
