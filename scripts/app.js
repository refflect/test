Vue.component('todo-item', {
    props: ['todo'],
	template: '<li>{{ todo.name }}</li>'
});


var app = new Vue({
	el: '#app',
	data: {
		//message: 'You loaded this page on ' + new Date().toLocaleString(),
		message: 'МожноСкачать',
		counter: 0,
		yaClientID: '',
		hidden: false,
		checked: false,
		tags: [
			{ id: '2160p', name: '2160p|4K' },
			{ id: '1080p', name: '1080p' },
			{ id: '720p', name: '720p' },
			{ id: 'dub', name: 'Дубляж' }
		],
		selectedTags: [],
	},
	computed: {
		js_tag: function () {
			return {
				'tag-container__tag' : true,
				'tag-container__tag_checked': this.checked,
				'text-danger': this.error && this.error.type === 'fatal'
			}
		}
	},
	methods: {
		reverseMessage: function () {
		  this.message = this.message.split('').reverse().join('');
		},
		toggle: function(event){
			this.counter++;
			let index = this.selectedTags.indexOf(event.target.id);
			if ( index == -1 ) {
				this.selectedTags.push(event.target.id);
			} else {
				this.selectedTags.splice(index, 1);
			}
			this.checked = !this.checked;
		},
		yaCounter: function(e, target = 'GOAL136604618'){
			this.yaClientID = yaCounter47759482.getClientID();
			console.log( target,  this.yaClientID);
			/* Sending target to Yandex Metrika */
			try {
				yaCounter47759482.reachGoal(target);
			} catch(e) { }		
		}
	},


});

