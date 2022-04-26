function editElement(ref, match, replacer) {
//   const text = ref.textContent;
//   const edited = text.replaceAll(match, replacer);
//   ref.textContent = edited;

//   const content = ref.textContent
//   const matcher = new RegExp(match, 'g')
//   const edited = content.replace(matcher,replacer)
//   ref.textContent = edited

const text = ref.textContent
const edited = text.split(match).join(replacer)
ref.textContent = edited
}
