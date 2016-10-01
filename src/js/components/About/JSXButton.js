
export default {

  data() {
    return {
      show: false
    }
  },

  methods : {
    toggleText() {
      this.show =! this.show
    }
  },

  render(h) {
    return (
      <div>
        <div>
          <button on-click={ this.toggleText }>Click Me!</button>
        </div>
        <br />
        { this.show ?
          <div>
            <p>Hi! I'm Rendered By Vue Render Function With JSX! :D. You will get:</p>
            <ul>
              <li>Self Closing Tags</li>
              <li>Simple Data Binding, no need double brackets</li>
              <li>No Needs Register Component</li>
              <li>Write Your Code In JS file!</li>
              <li>Nice Approach For React Developer</li>
              <li>No Need "bind(this)" in the every local event, It's autobinding!</li>
              <li>But You Still Need "bind(this, arg)" When you want to pass some arguments~</li>
              <li>You Still Have Native DOM Event!</li>
            </ul>
          </div>
        : null  }
      </div>
    )

  }

};
