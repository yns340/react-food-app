import styles from "./tag.module.css"

export default function Tag({name}){
    return (
        <div class={styles.container}>{name}</div>
    )
}