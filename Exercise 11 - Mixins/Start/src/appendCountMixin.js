export const appendCountMixin = {
    computed: {
        appendCount() {
            console.log('sdgfsdg')
            return this.anotherText + " " + "(" + this.anotherText.length + ")";
        }
    }
}