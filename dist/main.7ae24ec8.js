// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

// eslint-disable-next-line no-global-assign
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  return newRequire;
})({"epB2":[function(require,module,exports) {
var html = document.querySelector('#demo');
var style = document.querySelector('#style');

var string = '\n/*\u4F60\u597D\uFF0C\u6211\u662F\u4E00\u540D\u524D\u7AEF\u65B0\u4EBA\n\u63A5\u4E0B\u6765\u6211\u8981\u52A0\u6837\u5F0F\u4E86\n\u6211\u8981\u52A0\u7684\u6837\u5F0F\u662F*/\nbody{\n    color:blue;\n}\n/* \u63A5\u4E0B\u6765\u6211\u5C55\u793A\u4E00\u4E0B\u751F\u6210\u4E00\u4E2A\u516B\u5366\u56FE\n * \u9996\u5148\u51C6\u5907\u4E00\u4E2Adiv\n*/\n\n\n#div1{\n    position:fixed;\n    top:0px;\n    left:50%;\n    transform:translateX(-50%);\n    height:200px;\n    width:200px; \n    box-shadow:0 0 3px rgba(0,0,0,0.5);\n    border:none;\n    border-radius:50%;\n    background: linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 50%, rgba(0,0,0,1) 50%, rgba(0,0,0,1) 100%);\n}\n\n/*\u63A5\u4E0B\u6765\u753B\u51FA\u9634\u9633\u9C7C\n*/\n#div1::before{\n    content:\'\';\n    height: 100px;\n    width: 100px;\n    position: absolute;\n    transform:translatex(-50%);\n    top:0px;\n    left: 50%;\n    border-radius: 50%;\n    background: radial-gradient(circle, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 1) 25%, rgba(255, 255, 255, 1) 25%, rgba(255, 255, 255, 1) 100%);\n}\n#div1::after{\n    content:\'\';\n    height: 100px;\n    width: 100px;\n    display: block;\n    position: absolute;\n    left: 50px;\n    bottom: 0px;\n    border-radius: 50%;\n    background: radial-gradient(circle, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 1) 25%, rgba(0, 0, 0, 1) 25%, rgba(0, 0, 0, 1) 100%);\n}\n\n';

var string2 = '';
// string = string.replace(/\n/g, "<br>")
var n = 0;

if (document.body.clientWidth < 500) {
    var div1 = document.querySelector('#div1');
    console.log(document.body.clientWidth);
    console.log(document.body.clientHeight);
    div1.style.left = (document.body.clientWidth - 200) / 2 + 'px';
    div1.style.top = (document.body.clientHeight / 2 - 200) / 2 + 'px';
}

var step = function step() {
    setTimeout(function () {

        if (string[n] === '\n') {
            string2 += '<br>';
        } else if (string[n] === ' ') {
            string2 += '&nbsp;';
        } else {
            string2 += string[n];
        }

        // string2 += (string[n] === '\n' ? '<br>' : string[n]); 

        // console.log(string2.length);
        // console.log(string.length);
        // console.log(n);

        html.innerHTML = string2;
        style.innerHTML = string.substring(0, n);
        window.scrollTo(0, 99999);
        html.scrollTo(0, 99999);

        if (n < string.length - 1) {
            step();
            n++;
            // console.log(n);  54
        } else {}
    }, 0);
};

step();
},{}]},{},["epB2"], null)
//# sourceMappingURL=main.7ae24ec8.map