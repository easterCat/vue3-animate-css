## vue3-animate-css

### Download

```
yarn add vue3-animate-css
or
npm install vue3-animate-css --save
```

### props

- direction : animate type => "animate__fadeIn"
- delay : animate delay =>  1,2,3,4,5

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
