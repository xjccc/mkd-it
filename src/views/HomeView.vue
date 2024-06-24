<template>
  <div>Home</div>
  <div v-html="result"></div>
</template>

<script setup lang="ts">
  import markdownit from 'markdown-it'
  import markdownItKatex from 'markdown-it-katex'
  import 'katex/dist/katex.min.css' // 引入 KaTeX 样式
  const markdownContent = ref(`
$$
\\begin{bmatrix}\\mu\\end{bmatrix} = \\begin{bmatrix}\\dfrac{\\tau}{} \\\\ \\dfrac{\\mathrm{d}u}{\\mathrm{d}y}\\end{bmatrix} = \\frac{N/m^2}{\\frac{m/s}{m}} = \\frac{N \\bullet s}{m^2} = Pa \\bullet s
$$

污泥负荷(F)与容积负荷(Fr)是污水处理工艺中两个关键的概念，它们分别衡量了活性污泥在单位时间内的处理效率和曝气池对有机污染物的接纳能力。

**1. 污泥负荷(F)**

污泥负荷(F)本质上反映了活性污泥在单位时间内去除污染物的能力，其计算公式为：
$$
F_w = \\frac{F}{M} = \\frac{QS}{VX}
$$

- $$ F_w $$ 
代表污泥负荷，单位是kgCOD(或BOD)每千克MLSS每天(d)。
- \( Q \) 是每天的进水量，以立方米(m³/d)计。
- \( S \) 是废水中COD或BOD的浓度，以毫克每升(mg/L)表示。
- \( V \) 是曝气池的有效容积，同样以立方米(m³)计。
- \( X \) 是污泥浓度，也以毫克每升(mg/L)为单位。

在活性污泥系统的运行过程中，不同阶段的污泥负荷会对净化效果产生影响。一般而言，适宜的污泥负荷范围为0.3~0.5 kgBOD₅/kgMLSS·d，这个范围内，BOD₅去除率能达到90%以上，SVI值保持在80~150，表明污泥的吸附和沉淀性能良好。

**2. 容积负荷(Fr)**

相比之下，容积负荷\( F_r \)关注的是曝气池的总体处理能力，它是单位体积曝气池在单位时间内所能接纳的有机污染物量，计算公式为：
$$ F_r = \\frac{QS}{V} $$

- \( F_r \) 表示曝气池容积负荷，单位是kgBOD₅每立方米每天(m³/d)。
- 同样，\( Q \) 是进水流量，\( S \) 是BOD或COD浓度，而 \( V \) 则是曝气池的总体体积。

这两个参数对于曝气池的设计和运营管理至关重要，合理控制污泥负荷和容积负荷有助于维持系统的稳定运行，确保污水处理过程高效且经济。
@@id@@7189 12
    `)
  const result = computed(() => {
    const md = markdownit().use(markdownItKatex, {
      throwOnError: false,
      errorColor: ' #cc0000'
    })
    return md.render(markdownContent.value)
  })

  console.log(result)
</script>
