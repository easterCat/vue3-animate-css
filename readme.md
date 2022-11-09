### Download

```
yarn add vue3-animate-css
or
npm install vue3-animate-css --save
```

### props

- direction : animate type
  - value : <https://animate.style/>
  - default : fadeIn
- delay : animate delay =>  1,2,3,4,5
- timing:
  - value  : ease / ease-in /  ease-out / ease-in-out / linear / step-start  step-end
  - default : linear

### use

```vue3
<el-tag
    v-for="(tag, tIndex) in tagList"
    v-animate="{ direction: 'backInDown', delay: 1 }"
    class="tag-style"
    size="large"
    effect="dark"
    closable
    :key="tIndex"
    @close="removeTag(tIndex)"
>
    {{ tag }}
</el-tag>
```
