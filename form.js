const TextInput = {
  props: {
    name: String,
    label: String,
    placeholder: String,
    type: String,
    min: String,
    max: String,
    required: String,
  },
  template: `
        <label :for="name" class="form-label">{{label}}</label>
        <input :type="type" :name="name" :placeholder="placeholder" :max="max" :min="min" :required="required" :autocomplete="name + '-new'" class="form-control" />
    `,
};
