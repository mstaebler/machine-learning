/*
 * Expected keys in object:
 * rooms, area, type
 */

var Node = function(object) {
    for (var key in object) 
    {
        this[key] = object[key];
    }
};

Node.prototype.measureDistances = function(area_range_obj, rooms_range_obj) {
    var rooms_range = rooms_range_obj.max - rooms_range_obj.min;
    var area_range = area_range_obj.max - area_range_obj.min;

    for (var i in this.neighbors)
    {
        var neighbor = this.neighbors[i];

        var delta_rooms = neighbor.rooms - this.rooms;
        delat_rooms = (delta_rooms) / rooms_range;

        var delta_area = neighbor.area - this.area;
        delta_area = (delta_area) / area_range;

        neighbor.distance = Math.sqrt( delta_rooms*delta_rooms + delta_area*delta_area );
    }
}
var NodeList = function(k) {
    this.nodes = [];
    this.k = k;
};