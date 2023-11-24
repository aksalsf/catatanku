import PropTypes from "prop-types"

import CardTitle from "@/components/card-title"
import CardTimestamp from "@/components/card-timestamp"
import CardContent from "@/components/card-content"
import CardFooter from "@/components/card-footer"
import Button from "@/components/button"
import Card from "@/components/card"

function NoteCard ({
  title,
  body,
  createdAt,
  isArchived,
  onArchive,
  onDelete
}) {
  return (
    <Card>
      <CardTitle text={title} />
      <CardTimestamp data={createdAt} />
      <CardContent>
        {body}
      </CardContent>
      <CardFooter>
        <Button
          text={isArchived ? "Pulihkan" : "Arsipkan"}
          variant="primary"
          onClick={onArchive}
        />
        <Button
          text="Hapus"
          variant="secondary"
          onClick={onDelete}
        />
      </CardFooter>
    </Card>
  )
}

NoteCard.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  isArchived: PropTypes.bool.isRequired,
  onArchive: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired
}

export default NoteCard
