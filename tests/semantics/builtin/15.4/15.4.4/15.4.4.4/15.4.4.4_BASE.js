var x = [1,2,3];
var y = x.concat(4,5,6);
var __result1 = y.toString();
var __expect1 = "1,2,3,4,5,6";
var __result2 = y.length;
var __expect2 = 6;
var __result3 = x.toString();
var __expect3 = "1,2,3";
var __result4 = x.length;
var __expect4 = 3;

var arr1 = [0,1];
var arr2 = [2,3];
var arr3 = arr1.concat(arr2);
var __result5 = arr3[0];
var __expect5 = 0;
var __result6 = arr3[1];
var __expect6 = 1;
var __result7 = arr3[2];
var __expect7 = 2;
var __result8 = arr3[3];
var __expect8 = 3;
var __result9 = arr3[4];
var __expect9 = undefined;
