import { equals } from 'naive-tests'
import { Entity } from '../../js/engine/world/entity.mjs'

const entity = new Entity(10, 10)
equals(entity.center.posX, 1, 'error')