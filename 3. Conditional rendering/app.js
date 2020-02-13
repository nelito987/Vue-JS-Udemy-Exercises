// Put this in the script section in JSFiddle
// In a local setup, you need to merge this and the index.html file into one file
new Vue({
	el: '#app',
	data: {
		show: true,
		ingredients: ['milk', 'sugar', 'cocoa', 'banana'],
		persons: [
			{name: 'Mika', age: 5, color: 'pink'},
			{name: 'Yana', age:1, color: 'yellow'},
			{name: 'Danail', age: 34, color: 'blue'}
		]
	}
})