const test = {
    name: 'mustafa',
    getName: {get:function() {
        console.log(this);
    }}
}
test.getName.get();