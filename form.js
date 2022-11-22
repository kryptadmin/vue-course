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

const SelectInput = {
  props: ["name", "label", "items", "required"],
  template: `
    <div class="mb-3">
      <label :for="name" class="form-label">{{label}}</label>
      <select :name="name" :required="required" class="form-select">
        <option v-for="option in items" :value="option.value">{{option.text}}</option>
      </select>
    </div>
  `,
};

const CheckBoxInput = {
  props: ["name", "label", "required", "value"],
  template: `
    <div class="mb-3">
      <div class="form-check">
        <input class="form-check-input" :name="name" :required="required" :value="value" :id="name" />
        <label :for="name" class="form-check-label">{{label}}</label>
      </div>
    </div>
  `,
};
