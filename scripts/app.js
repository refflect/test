Vue.component('todo-item', {
    props: ['todo'],
	template: '<li>{{ todo.name }}</li>'
});

Vue.component('tag-container', {
    props: ['tags2'],
	template: '<ul>\
					<li  v-for="tag2 in tags2" :key="tag2.id"  class="tag-container__tag">\
						<input type="checkbox"  :id="tag2.id" :value="tag2.id" v-model="selectedTags">\
						<label :for="tag2.id"> {{ tag2.name }} </label>\
					</li>\
				<ul>'
});

var app = new Vue({
	el: '#app',
	data: {
		//message: 'You loaded this page on ' + new Date().toLocaleString(),
		message: 'МожноСкачать',
		counter: 0,
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
		}
	},


});

