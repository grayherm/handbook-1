<script setup>
import { VPTeamMembers } from 'vitepress/theme'

const members = [
  {
    avatar: 'https://avatars.githubusercontent.com/u/24614929',
    name: 'Alex',
    title: 'Director',
    links: [
      { icon: 'github', link: 'https://github.com/zuedev' },
      { icon: 'twitter', link: 'https://twitter.com/zuedev' }
    ]
  },
]
</script>

# Our Team

Say hello to our awesome team.

<VPTeamMembers size="small" :members="members" />
