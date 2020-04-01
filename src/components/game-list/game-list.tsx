import { Component, State, h } from '@stencil/core';

function getStorageIndex() {
  let storeIndex = new Set();
  for (var i = 0; i < localStorage.length; i++) {
    storeIndex.add(localStorage.key(i));
  }
  return storeIndex;
}

@Component({
  tag: 'ho-game-list',
  styleUrl: 'game-list.css',
  shadow: true
})
export class GameList {
  @State() games = this.fetchLocalFiles();
  fetchLocalFiles() {
    console.log([...getStorageIndex()]);
    return [...getStorageIndex()]
      .filter((k:string) => /^sgf_/.test(k))
      .map((fileKey:string) => ({
        ...JSON.parse(localStorage.getItem(fileKey)),
        key: fileKey
      }))
  }

  importFile(ev:any) {
    const file = ev.target.files[0];
    const reader = new FileReader();
    reader.onload = (load: any)  => {
        const content =  load.target.result;
        localStorage.setItem(`sgf_${file.name}`, JSON.stringify({
          name: file.name,
          modifiedAt: file.lastModified,
          size: file.size,
          data: content,
          uploadedAt:  Date.now()
        }));
    }
    reader.readAsText(file);
    this.games = this.fetchLocalFiles();
  }

  render() {
    return (<host>
        <label>
          Upload
          <input type="file" name="sgf-import" onChange={ev => this.importFile(ev)} accept=".sgf"/>
        </label>
        <section>
          {this.games.map(g => <ho-game-card game={g}></ho-game-card>)}
        </section>
    </host>
    );
  }
}
