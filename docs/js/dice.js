$(document).ready(function(){var c=[];function o(a){var t=$("#dice__cube"),o=t.attr("class").split(" ")[0],s="show-"+a;t.removeClass(),o==s?t.addClass(s+" show-same"):t.addClass(s),c.push(a)}$("#dice__btn").on("click ",function(){var a,t=Math.floor(6*Math.random()+1);1==t?o("front"):2==t?o("back"):3==t?o("right"):4==t?o("left"):5==t?o("top"):6==t&&o("bottom"),(a=$("#dice__audio")[0]).pause(),a.currentTime=0,a.play()})});