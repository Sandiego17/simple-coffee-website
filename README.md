## 👨‍🏫 Note to the Developers

Each mentee:

- Works only on one file  

**Example:**

- Mentee A → `navbar.html`  
- Mentee B → `hero.html`  
- Mentee C → `about.html`  


## 🔁 Git Workflow:
- Clone repo  
- Create branch:

```bash
git checkout -b feature/navbar
```
- Work only on assigned file
- Push + create PR
- You review & comment/request changes/approve


## 🎨 Styling Strategy (Important)
❌ Avoid:
Each file having its own <head> and full HTML structure

✅ Instead:
Each component should ONLY contain:
```bash
<section class="navbar">
  <!-- navbar content -->
</section>
```


## 🔥 Finally
Create your individual style sheets and import in the index.html file, as you normally would with style sheets.
