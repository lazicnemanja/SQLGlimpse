// Generated by CoffeeScript 1.9.3
(function() {
  var Playground, SqlViewer;

  Playground = (function() {
    var CreateSvg, instance;

    function Playground() {}

    instance = null;

    CreateSvg = (function() {
      function CreateSvg() {
        return SVG("main").size('100%', '100%');
      }

      return CreateSvg;

    })();

    Playground.get = function() {
      return instance != null ? instance : instance = new CreateSvg();
    };

    return Playground;

  })();

  SqlViewer = (function() {
    function SqlViewer(url) {
      this.properties = {
        url: url,
        shema: '',
        playground: null
      };
    }

    SqlViewer.prototype.init = function() {
      this.getJson();
      this.createPlayground();
      this.draw();
    };

    SqlViewer.prototype.getJson = function() {
      return $(document).ready(function() {
        return $.get(this.properties.url, function(data) {
          return data;
        });
      });
    };

    SqlViewer.prototype.createPlayground = function() {
      return this.properties.playground = Playground.get();
    };

    SqlViewer.prototype.draw = function() {
      return alert(3);
    };

    return SqlViewer;

  })();

}).call(this);
